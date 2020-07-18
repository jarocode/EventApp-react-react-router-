import React, {createContext, useReducer} from 'react';

const initialState = [];

const reducer = (state, action) => {
    switch(action.type) {
        case 'Add':
            return state = action.payload;
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
 