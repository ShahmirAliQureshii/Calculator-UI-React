import React from "react";
import styles from "./ButtonsRow.module.css";

const ButtonsRow = ({ButtonValue}) => {
  const buttons = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];
  return (
    <>
      <div className="Buttons-Row flex flex-wrap items-center justify-center gap-3">
        {buttons.map((button, idx) => (
          <button className={styles.btn} key={idx} value={button} onClick={()=>ButtonValue(button)}>
            {button}
          </button>
        ))}
      </div>
    </>
  );
};

export default ButtonsRow;
