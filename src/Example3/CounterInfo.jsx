import React, { useContext } from "react";
import { ExampleThreeContext } from "./ExampleThreeContext";

const CounterInfo = () => {
  const { counter, addToCounter } = useContext(ExampleThreeContext);

  return (
    <>
      <h1>Example 3: hooks</h1>
      <p>Count: {counter}</p>
      <button onClick={() => addToCounter(1)}>+1</button>{" "}
      <button onClick={() => addToCounter(10)}>+10</button>{" "}
    </>
  );
};

export default CounterInfo;