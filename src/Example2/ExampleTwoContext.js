import React, { Component } from "react";

export const ExampleTwoContext = React.createContext();

// Context which aggregate states
export default class ExampleTwoContextProvider extends Component {
  state = {
    text: "Hello",
  };

  handleClick = () => {
    this.setState((prevState) => {
      return { text: prevState.text + "a" };
    });
  };

  render() {
    const value = {
      text: this.state.text,
      handleClick: this.handleClick,
    };

    return (
      <ExampleTwoContext.Provider value={value}>
        {this.props.children}
      </ExampleTwoContext.Provider>
    );
  }
}
