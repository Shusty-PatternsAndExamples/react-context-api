import React, { useState } from "react";

export const ExampleFourContext = React.createContext();

// Context which aggregate states
const ExampleFourContextProvider = ({ children }) => {
  const [text, setText] = useState("Hello");

  const handleClick = () => {
    setText((prev) => prev + "o");
  };

  const value = {
    text,
    handleClick,
  };

  return (
    <ExampleFourContext.Provider value={value}>
      {children}
    </ExampleFourContext.Provider>
  );
};

export default ExampleFourContextProvider;
