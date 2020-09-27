import React, { Component } from "react";
import { ExampleOneClassContext } from "./ExampleOneClassContext";

// Using context consumer

export default class CounterInfo extends Component {
  render() {
    return (
      <ExampleOneClassContext.Consumer>
        {({ counter }) => (
          <>
            <h1>Class component</h1>
            <p>Count: {counter}</p>
          </>
        )}
      </ExampleOneClassContext.Consumer>
    );
  }
}
