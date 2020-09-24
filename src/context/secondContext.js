import React, {useReducer, createContext} from 'react';

const  initialState = {
    showSavedEvents: false,
    showAddEventModal : false
};
    
const reducer = (state, action) => {
     switch (action.type) {
        case 'showSavedEvents':
            return {...state, showSavedEvents : action.payLoad};
        case 'showAddEventModal' :
            return {...state, showAddEventModal: action.payLoad} ;
        default:
            return state;
        }
}
export  const SecondContext = createContext();
export const  SecondProvider= ({children}) => {
    
   const [displayState , dispatch2] = useReducer(reducer, initialState) 
    
    return ( 
        <SecondContext.Provider value={
            { 
                displayState, 
                dispatch2
            }
            }>
            {children}
        </SecondContext.Provider>
     );
}
 