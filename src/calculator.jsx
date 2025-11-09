import React, { useState, useRef } from "react";

function Calculation() {
  const [value, setValue] = useState("");
  const resetNext = useRef(false); 

  const handleInput = (e) => {
    const inputValue = e.target.innerText;

    if (resetNext.current) {
      setValue(inputValue);
      resetNext.current = false;
    } else {
      setValue((prev) => prev + inputValue);
    }
  };

  const clearInput = () => {
    setValue("");
    resetNext.current = false;
  };

  const backspace = () => {
    setValue((prev) => prev.slice(0, -1));
  };

  const displayValue = () => {
    try {
      const result = eval(value);
      setValue(String(result));
      resetNext.current = true;
    } catch {
      setValue("Error");
      resetNext.current = true;
    }
  };

  return (
    <>
      <div className="con">
        <input type="text" value={value} placeholder="Enter Number" readOnly />

        <div className="keys">
          <button onClick={clearInput} id="reset">AC</button>
          <button onClick={handleInput} id="perc">%</button>
          <button onClick={handleInput} id="divide">/</button>
          <button onClick={backspace} id="spaceback">⌫</button>

          <button onClick={handleInput}>7</button>
          <button onClick={handleInput}>8</button>
          <button onClick={handleInput}>9</button>
          <button onClick={handleInput} id="multi">*</button>

          <button onClick={handleInput}>4</button>
          <button onClick={handleInput}>5</button>
          <button onClick={handleInput}>6</button>
          <button onClick={handleInput} id="minus">-</button>

          <button onClick={handleInput}>1</button>
          <button onClick={handleInput}>2</button>
          <button onClick={handleInput}>3</button>
          <button onClick={handleInput} id="plus">+</button>

          <button onClick={handleInput}>(</button>
          <button onClick={handleInput}>)</button>
          <button onClick={handleInput}>0</button>
          <button onClick={handleInput} id="dot">.</button>

          <button onClick={displayValue} id="equal">=</button>
        </div>
      </div>
    </>
  );
}

export default Calculation;
