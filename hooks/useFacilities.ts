'use client';
import { useEffect, useState } from 'react';

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
  verifiedGrade: string | null;
  verifiedYear: string | null;
};

export default function useFacilities(query = '') {
  const [data, setData] = useState<FacilityItem[] | null>(null);

  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const [fRes, eRes] = await Promise.all([
          fetch(
            `/api/facilities${query ? '?q=' + encodeURIComponent(query) : ''}`,
          ),
          fetch('/api/facilities-evaluation'),
        ]);

        const [facilitiesRaw, evaluationsRaw]: [
          FacilityRaw[],
          EvaluationRaw[],
        ] = await Promise.all([
          fRes.ok ? fRes.json() : [],
          eRes.ok ? eRes.json() : [],
        ]);

        const combined: FacilityItem[] = facilitiesRaw.map((f) => {
          const ev = evaluationsRaw.find((ev) => ev.phone === f.phone);
          return {
            id: f.id,
            name: f.name,
            address: f.address,
            tel: f.phone,
            googleMapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(f.address)}`,
            serviceTypes: f.target_population.split('、').map((s) => s.trim()),
            ownershipType: f.ownership,
            facilitySize: f.total_beds,
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

  return data;
}
