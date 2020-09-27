import React, { Component } from "react";

import {
  ExampleOneClassContext,
  defaultObjectOne,
} from "./ExampleOneClassContext";
import CounterInfo from "./CounterInfo";
import CounterActions from "./CounterActions";

export default class Example1 extends Component {
  state = { counter: defaultObjectOne.counter };

  handleAddToCounter = (val) => {
    this.setState((prevState) => {
      return { counter: prevState.counter + val };
    });
  };

  render() {
    return (
      <div className="container">
        <ExampleOneClassContext.Provider
          value={{
            counter: this.state.counter,
            addToCounter: this.handleAddToCounter,
          }}
        >
          <CounterInfo />
          <CounterActions/>
        </ExampleOneClassContext.Provider>
      </div>
    );
  }
}
