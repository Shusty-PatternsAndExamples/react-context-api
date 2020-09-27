import React, { Component } from "react";
import { ExampleOneClassContext } from "./ExampleOneClassContext";

export default class CounterActions extends Component {
  // only one context can be get by contextType
  // , but contextType let us use context props before render()
  // its posible have more contexts in contextType, but its complicated
  // better solution? use consumer or hooks.
  static contextType = ExampleOneClassContext;

  log = () => {
    console.log(this.context);
  };

  render() {
    this.log();
    return (
      <div>
        <button onClick={() => this.context.addToCounter(1)}>+1</button>{" "}
        <button onClick={() => this.context.addToCounter(10)}>+10</button>{" "}
      </div>
    );
  }
}
