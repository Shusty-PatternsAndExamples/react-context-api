import { createContext } from 'react'

export const defaultObjectOne = {
    counter: 0,
    addToCounter: () => {}
};

export const ExampleThreeContext = createContext(defaultObjectOne);