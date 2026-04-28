import { Option } from '../../data/options';

type CheckboxProps = {
  groupId: string;
  label: string;
  options: Option[];
  values: Option['value'][];
  onChange: (selectedValues: Option['value'][]) => void;
};

export default function Checkbox({
  groupId,
  label,
  options,
  values,
  onChange,
}: CheckboxProps) {
  function handleCheckboxChange(optionValue: Option['value']) {
    const next = values.includes(optionValue)
      ? values.filter((v) => v !== optionValue)
      : [...values, optionValue];
    onChange(next);
  }

  return (
    <fieldset>
      <legend className="block font-medium text-neutral-800 mb-4">
        {label}
      </legend>
      <div className="space-y-2">
        {options.map((option) => (
          <div key={`${groupId}-${option.value}`} className="flex items-center">
            <input
              id={`${groupId}-${option.value}`}
              name={groupId}
              type="checkbox"
              value={option.value}
              className="h-4 w-4 accent-secondary"
              onChange={() => handleCheckboxChange(option.value)}
              checked={values.includes(option.value)}
            />
            <label
              htmlFor={`${groupId}-${option.value}`}
              className="ml-2 text-primary"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}
