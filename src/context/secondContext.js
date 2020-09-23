import React, {useReducer, createContext} from 'react';

const  initialState = [];
    
const reducer = (state, action) => {
     switch (action.type) {
        case 'Add':
            return state.push(action.payLoad);
        default:
            return state;
        }
}
export  const SecondContext = createContext();
export const  SecondProvider= ({children}) => {
    
   const [details , dispatch] = useReducer(reducer, initialState) 
    
    return ( 
        <SecondContext.Provider value={
            { 
                details, 
                dispatch
            }
            }>
            {children}
        </SecondContext.Provider>
     );
}
 