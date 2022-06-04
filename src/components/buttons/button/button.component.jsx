import React from "react";
import './button.styles.css';

const Button = ({ children, buttonStyles, buttonSize }) => {

  const STYLES = [
    "btn--primary",
    "btn--secondary",
    "btn--warning",
    "btn--transparent",
  ];

  const SIZE = [
    "sm",
    "md",
  ];

  const checkStyles = STYLES.includes(buttonStyles) ? buttonStyles : STYLES[0];
  const checkSize = SIZE.includes(buttonSize) ? buttonSize : SIZE[0];

  return <button className={`btn ${checkStyles} ${checkSize}`}>{children}</button>;
};

export default Button;
