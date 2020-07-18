import React,{createContext,useReducer, useEffect} from 'react';

const initialState = {
    header: 'Upcoming',
    restOfState: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            return {...state , restOfState : action.payload};
        case 'ChangeHeader':
            return {...state , header : action.payload};
        default :
        return state;
         
    }
}
export const MyContext = createContext();

export const MyProvider = ({children}) => {
    
    useEffect(() => {
        const Api = async () => {
            const res = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=10&size=6&apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4")
            let resJson = await res.json();
            return resJson;
        }
        Api().then(res =>{
            const {events} = res._embedded;
            dispatch({type: 'ADD', payload: events})
        });
    },[])
    
    const [state, dispatch] = useReducer(reducer, initialState)
    
    return (  
        <MyContext.Provider value={{state, dispatch}}>
             {children}
        </MyContext.Provider>
    );
}
 
