import React, {createContext, useContext, useReducer} from 'react';


export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children, dispatch }) => (
    <StateContext.Provider value={useReducer(reducer, initialState, dispatch)}>
    {children}
    </StateContext.Provider>
)



export const useStateValue = () => useContext(StateContext);