import React, { Component } from 'react'
import { ExampleTwoContext } from './ExampleTwoContext'

export default class Text extends Component {
    render() {
        return (
            <ExampleTwoContext.Consumer>
            {({ text, handleClick }) => (
              <>
                <p>Text: {text}</p>
                <button onClick={handleClick}>Add "a" to text</button>
              </>
            )}
          </ExampleTwoContext.Consumer>
        )
    }
}
