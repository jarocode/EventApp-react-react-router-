import React, {createContext, useReducer} from 'react';

const initialState = [];

const reducer = (state, action) => {
    switch(action.type) {
        case 'Add':
            state.push(action.payload);
            return state;
        case 'Remove':
            let newState = [...action.payload]
            return newState;
    }
}

export const TableContext = createContext();

export const TableProvider = ({children}) => {
    const [tableData, dispatch3] = useReducer(reducer, initialState)
    return ( 
        <TableContext.Provider value = {
            {
                tableData,
                dispatch3
            }
            }>
            {children}
        </TableContext.Provider>
     );
}
 