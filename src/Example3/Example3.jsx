import React, { useState } from "react";

import { ExampleThreeContext, defaultObjectOne } from "./ExampleThreeContext";
import CounterInfo from "./CounterInfo";

const Example3 = () => {
  const [counter, setcounter] = useState(defaultObjectOne.counter);

  const handleAddToCounter = (val) => {
    setcounter((prev) => prev + val);
  };

  return (
    <div className="container">
      <ExampleThreeContext.Provider
        value={{
          counter,
          addToCounter: handleAddToCounter,
        }}
      >
        <CounterInfo />
      </ExampleThreeContext.Provider>
    </div>
  );
};

export default Example3;
