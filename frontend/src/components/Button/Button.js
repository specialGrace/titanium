import React from "react";

import styles from "./Button.module.css";

const Button = ({ text, bgColor, color }) => {
  return (
    <button
      className={styles.btn}
      style={{ backgroundColor: bgColor, color: color }}
    >
      {text}
    </button>
  );
};

export default Button;
