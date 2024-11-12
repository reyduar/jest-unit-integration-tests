import PropTypes from "prop-types";
import { useState } from "react";

export const CounterApp = ({ value }: any) => {
  const [counter, setCounter] = useState(value);
  const handleAddOnClick = () => {
    setCounter(counter + 1);
  };

  const handleSubstracOnClick = () => {
    setCounter((c: number) => c - 1);
  };

  return (
    <>
      <h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAddOnClick}>+1</button>
      <button onClick={handleSubstracOnClick}>-1</button>
      <button onClick={() => setCounter(value)}>Reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};
