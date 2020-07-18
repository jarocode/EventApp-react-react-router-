import React, {useReducer, createContext} from 'react';

const  initialState = {
    Venues : '',
    date: '',
    image: '',
    names: '',
    types: '',
    genres: '',
    subGenres: '',
    display: 'false',
    show: 'false',
    showSuccess: 'false'
}

const reducer = (state, action) => {
     switch (action.type) {
        case 'AddVenues':
            return {...state, Venues: action.payload};
        case 'AddDate':
            return {...state, date: action.payload};
        case 'AddImage':
            return {...state, image: action.payload};
        case 'AddName':
            return {...state, names: action.payload}; 
        case 'AddType':
            return { ...state, types : action.payload};
        case 'AddGenre':
            return { ...state, genres : action.payload};
        case 'AddSubgenre':
            return { ...state, subGenres : action.payload};
        case 'AddDisplay' :
            return {...state, display: action.payload};
        case 'AddShow' :
            return {...state, show: action.payload};
        case 'AddShowSuccess' :
            return {...state, showSuccess: action.payload};
    }
}



export  const SecondContext = createContext();
export const  SecondProvider= ({children}) => {
    
   const [details , dispatch2] = useReducer(reducer, initialState) 
    
    return ( 
        <SecondContext.Provider value={
            { 
                details, 
                dispatch2
            }
            }>
            {children}
        </SecondContext.Provider>
     );
}
 