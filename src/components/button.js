import React from "react";
import "../scss/Button.scss";
const Button = (props) => {
  const { title, increment } = props;
  return <div className="button" title="add_cart" onClick={() => increment()}>{title}</div>;
};

export default Button;


