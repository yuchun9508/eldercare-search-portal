'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Filters, defaultFilters } from '../context/FilterContext';
import { getValueForLabel } from '../lib/options-utils';

type FacilityRaw = {
  id: string;
  ownership: string;
  name: string;
  district: string;
  address: string;
  phone: string;
  target_population: string;
  total_beds: string;
  long_term_care_beds: string;
  nursing_beds: string;
  dementia_beds: string;
  residential_beds: string;
};

type EvaluationRaw = {
  name: string;
  postal_code: string;
  address: string;
  phone: string;
  evaluation_2015: string;
  evaluation_2016: string;
  evaluation_2017: string;
  evaluation_2018: string;
  evaluation_2019: string;
  evaluation_2023: string;
};

type FacilityItem = {
  id: string;
  name: string;
  address: string;
  tel: string;
  googleMapsUrl: string;
  serviceTypes: string[];
  ownershipType: string;
  facilitySize: string;
  totalBeds: string;
  verifiedGrade: string | null;
  verifiedYear: string | null;
};

export default function useFacilities(options: Filters = defaultFilters) {
  const [data, setData] = useState<FacilityItem[] | null>(null);
  const evaluationMap = useRef(
    new Map<EvaluationRaw['phone'], EvaluationRaw>(),
  );

  // Since json data is provided labels instead of values, we need to filter the data on the client side based on the labels.
  const filteredData = useMemo(() => {
    return data
      ? data.filter((item) => {
          if (
            options.ownershipType.length > 0 &&
            !options.ownershipType.includes(
              getValueForLabel(item.ownershipType),
            )
          ) {
            return false;
          }
          if (
            options.facilitySize.length > 0 &&
            !options.facilitySize.includes(item.facilitySize)
          ) {
            return false;
          }
          if (
            options.verifiedGrade.length > 0 &&
            !options.verifiedGrade.includes(
              getValueForLabel(item.verifiedGrade || ''),
            )
          ) {
            return false;
          }
          return true;
        })
      : null;
  }, [data, options]);

  // console.log(data);
  // console.log(filteredData);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const eRes = await fetch('/api/facilities-evaluation');
        const evaluationsRaw: EvaluationRaw[] = eRes.ok
          ? await eRes.json()
          : [];

        if (mounted) {
          evaluationsRaw.forEach((ev) =>
            evaluationMap.current.set(ev.phone, ev),
          );
        }
      } catch (err) {
        if (mounted) evaluationMap.current.clear();
        // eslint-disable-next-line no-console
        console.error('Failed to fetch evaluations', err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);

  // District and category are filtered on the server side since only single values are supported.
  // Other filters are applied on the client side since they support multiple values and the json data is provided with labels instead of values.
  const query = `?district=${encodeURIComponent(options.district)}&category=${encodeURIComponent(options.category)}`;

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const fRes = await fetch(`/api/facilities${query}`);
        const facilitiesRaw: FacilityRaw[] = fRes.ok ? await fRes.json() : [];

        const combined: FacilityItem[] = facilitiesRaw.map((f) => {
          const ev = evaluationMap.current.get(f.phone);
          return {
            id: f.id,
            name: f.name,
            address: f.address,
            tel: f.phone,
            googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.address)}`,
            serviceTypes: f.target_population.split('、').map((s) => s.trim()),
            ownershipType: f.ownership,
            facilitySize:
              parseInt(f.total_beds) >= 150
                ? 'large'
                : parseInt(f.total_beds) >= 50
                  ? 'medium'
                  : 'small',
            totalBeds: f.total_beds,
            verifiedGrade:
              ev?.evaluation_2023 ||
              ev?.evaluation_2019 ||
              ev?.evaluation_2018 ||
              ev?.evaluation_2017 ||
              ev?.evaluation_2016 ||
              ev?.evaluation_2015 ||
              null,
            verifiedYear: ev
              ? ev.evaluation_2023
                ? '2023'
                : ev.evaluation_2019
                  ? '2019'
                  : ev.evaluation_2018
                    ? '2018'
                    : ev.evaluation_2017
                      ? '2017'
                      : ev.evaluation_2016
                        ? '2016'
                        : ev.evaluation_2015
                          ? '2015'
                          : null
              : null,
          };
        });

        if (mounted) setData(combined);
      } catch (err) {
        if (mounted) setData(null);
        // eslint-disable-next-line no-console
        console.error('Failed to fetch facilities or evaluations', err);
      }
    })();

    return () => {
      mounted = false;
    };
  }, [query]);

  return filteredData;
}
