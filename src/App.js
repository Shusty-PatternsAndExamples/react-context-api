import React, { Component } from "react";
import "./App.scss";

import Example1 from "./Example1/Example1";
import ExampleTwoContextProvider from "./Example2/ExampleTwoContext";
import Text from "./Example2/Text";
import Example3 from "./Example3/Example3";

import ExampleFourContextProvider from "./Example4/ExampleFourContext";
import { default as Text2 } from "./Example4/Text";

class App extends Component {
  render() {
    return (
      <>
        <Example1 />

        <ExampleTwoContextProvider>
          <div className="container">
            <h1>
              Example 2 (preffered for class component), custom ContextProvider
              class
            </h1>
            <Text />
          </div>
        </ExampleTwoContextProvider>

        <Example3 />

        <ExampleFourContextProvider>
          <div className="container">
            <h1>Example 4 (preffered), custom ContextProvider store</h1>
            <Text2 />
          </div>
        </ExampleFourContextProvider>
      </>
    );
  }
}

export default App;
