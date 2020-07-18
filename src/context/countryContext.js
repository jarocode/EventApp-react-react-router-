import React, {useReducer, createContext} from 'react';

const initialState = {
    countryCode: 'US',
    classification: 'sports'
};
const reducer = (state, action) => {
    switch(action.type) {
        case 'ChangeCountry' :
            return {...state, countryCode: action.payload}
        case 'ChangeClass' :
            return {...state, classification: action.payload}
        default:
            return state;
    }
}
export const countryContext = createContext();

export const CountryProvider = ({children}) => {
    
    const [state, dispatch1] = useReducer(reducer, initialState);
    return (  
        <countryContext.Provider value ={{newState: [state, dispatch1]}}>
            {children}
        </countryContext.Provider>
    );
}
 
