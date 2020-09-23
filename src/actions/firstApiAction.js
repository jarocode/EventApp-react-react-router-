import {ADD_EVENTS, CHANGE_HEADER} from './types';

const ApiCall = () => async (dispatch, getState) => {
    
        const data = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&page=10&size=6&apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4")
        const result  = await data.json();
        const {events} = result._embedded;
        dispatch({type: ADD_EVENTS, payload: events});
        // console.log(getState().event.restOfState);
        // console.log(res);
    };

export default ApiCall;
