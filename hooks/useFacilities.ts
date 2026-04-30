'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { getValueForLabel } from '../lib/options-utils';
import { Filters, defaultFilters } from '../components/FilterForm';

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

function combineWithEvaluations(
  facilitiesRaw: FacilityRaw[],
  evalMap: Map<string, EvaluationRaw>,
) {
  return facilitiesRaw.map((f) => {
    const ev = evalMap.get(f.phone);
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
}

export default function useFacilities(options: Filters = defaultFilters) {
  const [data, setData] = useState<FacilityItem[]>([]);
  const evaluationMap = useRef(
    new Map<EvaluationRaw['phone'], EvaluationRaw>(),
  );
  const facilitiesRawRef = useRef<FacilityRaw[] | null>(null);

  const [evaluationLoading, setEvaluationLoading] = useState(false);
  const [evaluationError, setEvaluationError] = useState<Error | null>(null);
  const [facilitiesLoading, setFacilitiesLoading] = useState(false);
  const [facilitiesError, setFacilitiesError] = useState<Error | null>(null);

  // fetch evaluations once, populate evaluationMap, recompute if facilities already loaded
  useEffect(() => {
    const ac = new AbortController();
    setEvaluationLoading(true);
    setEvaluationError(null);

    (async () => {
      try {
        const res = await fetch('/api/facilities-evaluation', {
          signal: ac.signal,
        });
        if (!res.ok) {
          throw new Error(`Evaluations fetch failed: ${res.status}`);
        }
        const evaluationsRaw: EvaluationRaw[] = await res.json();
        // if aborted, stop here
        if (ac.signal.aborted) return;

        evaluationMap.current.clear();
        evaluationsRaw.forEach((ev) => evaluationMap.current.set(ev.phone, ev));

        // if we already fetched facilities, recompute combined list
        if (facilitiesRawRef.current) {
          const combined = combineWithEvaluations(
            facilitiesRawRef.current,
            evaluationMap.current,
          );
          if (!ac.signal.aborted) setData(combined);
        }
      } catch (err) {
        if (ac.signal.aborted) return;
        setEvaluationError(err instanceof Error ? err : new Error(String(err)));
        console.error('Failed to fetch evaluations', err);
      } finally {
        if (!ac.signal.aborted) setEvaluationLoading(false);
      }
    })();

    return () => {
      ac.abort();
    };
  }, []);

  // district and category are filtered on the server side
  const query = `?district=${encodeURIComponent(options.district)}&category=${encodeURIComponent(options.category)}`;

  // fetch facilities per query; combine with whatever evalMap currently has and store raw
  useEffect(() => {
    const ac = new AbortController();
    setFacilitiesLoading(true);
    setFacilitiesError(null);

    (async () => {
      try {
        const res = await fetch(`/api/facilities${query}`, {
          signal: ac.signal,
        });
        if (!res.ok) {
          throw new Error(`Facilities fetch failed: ${res.status}`);
        }
        const facilitiesRaw: FacilityRaw[] = await res.json();
        if (ac.signal.aborted) return;

        facilitiesRawRef.current = facilitiesRaw;
        const combined = combineWithEvaluations(
          facilitiesRaw,
          evaluationMap.current,
        );
        if (!ac.signal.aborted) setData(combined);
      } catch (err) {
        if (ac.signal.aborted) return;
        setFacilitiesError(err instanceof Error ? err : new Error(String(err)));
        console.error('Failed to fetch facilities', err);
      } finally {
        if (!ac.signal.aborted) setFacilitiesLoading(false);
      }
    })();

    return () => {
      ac.abort();
    };
  }, [query]);

  const isLoading = evaluationLoading || facilitiesLoading;
  const error = evaluationError ?? facilitiesError;

  // ownershipType, facilitySize and verifiedGrade are filtered on the client side
  const filteredData = useMemo(() => {
    return data.filter((item) => {
      if (
        options.ownershipType.length > 0 &&
        !options.ownershipType.includes(getValueForLabel(item.ownershipType))
      )
        return false;
      if (
        options.facilitySize.length > 0 &&
        !options.facilitySize.includes(item.facilitySize)
      )
        return false;
      if (
        options.verifiedGrade.length > 0 &&
        !options.verifiedGrade.includes(
          getValueForLabel(item.verifiedGrade || ''),
        )
      )
        return false;
      return true;
    });
  }, [data, options]);

  return { filteredData, isLoading, error };
}
