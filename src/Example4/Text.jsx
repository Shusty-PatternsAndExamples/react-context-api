import React, { useContext } from "react";
import { ExampleFourContext } from "./ExampleFourContext";

const Text = () => {
  const { text, handleClick } = useContext(ExampleFourContext);

  return (
    <>
      <p>Text: {text}</p>
      <button onClick={handleClick}>Add "a" to text</button>
    </>
  );
};

export default Text;
