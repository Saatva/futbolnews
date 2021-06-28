import React, { FunctionComponent } from "react";
import "./RadioButtonGroup.css";

export interface RadioButtonGroupProps {
  name: string;
  selectedOption: string;
  options: Array<{
    value: string;
    label: string;
  }>;
  onChange: (option: { value: string; label: string }) => void;
}

export const RadioButtonGroup: FunctionComponent<RadioButtonGroupProps> = ({
  name,
  selectedOption,
  options,
  onChange,
}) => {
  return (
    <div className="radio-btn-group">
      {options.map((option) => (
        <label
          htmlFor={`${name}-${option.value}`}
          key={`${name}-${option.value}`}
          className={
            option.value !== selectedOption
              ? "radio-btn-group-label"
              : "radio-btn-group-label radio-btn-group-label-checked"
          }
        >
          <input
            type="radio"
            className="radio-btn-group-input"
            id={`${name}-${option.value}`}
            value={option.value}
            name={name}
            onChange={() => onChange(option)}
            checked={option.value === selectedOption}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
