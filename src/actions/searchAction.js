import {ADD_EVENTS} from './types';

const Search = (keyword) => async (dispatch, getState) => {
    
    const data = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4&size=20&keyword=${keyword}`)
    const result  = await data.json();
    const {events} = result._embedded;
    console.log(events);
    dispatch({type: ADD_EVENTS, payload: events});
    console.log(getState().search.event);
    // console.log(res);
};

export default Search;
