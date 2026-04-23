import {
  CATEGORIES,
  DISTRICTS,
  FACILITY_SIZES,
  OWNERSHIP_TYPES,
  VERIFIED_GRADES,
  Option,
} from '../data/options';

function buildMaps(options: Option[]) {
  const valueToLabel: Record<string, string> = {};

  options.forEach((opt) => {
    valueToLabel[opt.value] = opt.label;
  });

  const labelToValue = Object.entries(valueToLabel).reduce<
    Record<string, string>
  >((acc, [value, label]) => {
    acc[label] = value;
    return acc;
  }, {});

  return { valueToLabel, labelToValue };
}

const { valueToLabel: valueToLabelMap, labelToValue: labelToValueMap } =
  buildMaps([
    ...DISTRICTS,
    ...CATEGORIES,
    ...OWNERSHIP_TYPES,
    ...FACILITY_SIZES,
    ...VERIFIED_GRADES,
  ]);

export function getLabelForValue(value: string): string {
  return valueToLabelMap[value] || value;
}

export function getValueForLabel(label: string): string {
  return labelToValueMap[label] || label;
}
