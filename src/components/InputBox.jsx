import React from "react";

const InputBox = ({InputValue}) => {
  return (
    <div className="inputBox flex items-center p-2">
      <input
        value={InputValue}
        readOnly
        type="text"
        className="bg-black text-white p-2 min-w-60 w-auto rounded outline-none border-2 border-white"
        placeholder="Enter Your Values"
      />
    </div>
  );
};

export default InputBox;
