/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './ProductRadio.scss';

interface ProductRadioGroupProps {
  title: string;
  options: Array<string>;
  onChange: (index: number) => void;
  selected: number;
}

const ProductRadioGroup = ({
  title, options, onChange, selected,
}: ProductRadioGroupProps) => (
  <div className="radio-group">
    <div className="radio-group__title">{title.toUpperCase()}</div>
    <div className="radio-option">
      {
        options.map((value, index) => (
          <label htmlFor={value} className={`radio-option__label ${selected === index ? 'selected' : ''}`} onClick={() => onChange(index)}>
            {/* Use radio input for accessibility purposes and tab behavior */}
            <input
              type="radio"
              name={value}
              id={value}
              value={value}
              checked={selected === index}
              className="radio-option__input"
            />
            <span>{value}</span>
          </label>
        ))
      }
    </div>
  </div>
);

export default ProductRadioGroup;
