import React from "react";
import "../scss/Selector.scss";
const TypeSelector = (props) => {
  const { options, selector, current } = props;

  function isCurrent(current, i) {
    return current === i;
  }

  return (
    <div className="selector">
      {options.map((option, i) => (
        <div
          className={
            isCurrent(current, i)
              ? "selector_option_selected"
              : "selector_option"
          }
          onClick={() => selector(i)}
          key={i}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default TypeSelector;
