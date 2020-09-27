import React, { Component } from "react";
import "./App.scss";

import Example1 from "./Example1/Example1";
import ExampleTwoContextProvider from "./Example2/ExampleTwoContext";
import Text from "./Example2/Text";

class App extends Component {
  render() {
    return (
      <>
        <Example1 />

        <ExampleTwoContextProvider>
          <div className="container">
            <h1>Example 2 class component, custom ContextProvider class</h1>
            <Text />
          </div>
        </ExampleTwoContextProvider>

        <div className="container">
          <h1>Tittle</h1>
          <p>lorem</p>
        </div>
      </>
    );
  }
}

export default App;
