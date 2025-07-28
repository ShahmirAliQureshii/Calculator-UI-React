import React, { useState } from "react";
import ButtonsRow from "./ButtonsRow";
import InputBox from "./InputBox";

const Calculator = () => {
  const [CalVal, setCalVal] = useState("");

  const setInputValue = (button) => {
    if(button === 'C') {
      setCalVal('');
    } else if (button === '=') {
      let InputValue = eval(CalVal);
      setCalVal(InputValue);
    } else {
    let finalValue = CalVal + button;
    setCalVal(finalValue);
    }
  };

  return (
    <div className="Calculator-Conatiner flex items-center justify-center h-full w-full bg-white p-3">
      <div className="Calculator-Box bg-black flex flex-col gap-4 p-5 rounded-xl border-2 border-black h-auto max-w-72">
        <InputBox InputValue={CalVal}></InputBox>
        <div className="Buttons-Box flex flex-col gap-5 items-center justify-center">
          <ButtonsRow ButtonValue={(button) => setInputValue(button)}></ButtonsRow>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
