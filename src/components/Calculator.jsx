import React from "react";
import ButtonsRow from "./ButtonsRow";
import InputBox from "./InputBox";

const Calculator = () => {
  return (
    <div className="Calculator-Conatiner flex items-center justify-center h-full w-full bg-white p-3">
      <div className="Calculator-Box bg-black flex flex-col gap-4 p-5 rounded-xl border-2 border-black h-auto max-w-72">
        <InputBox></InputBox>
        <div className="Buttons-Box flex flex-col gap-5 items-center justify-center">
          <ButtonsRow></ButtonsRow>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
