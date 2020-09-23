import {ADD_EVENT_DETAILS} from  './types';

const EventDetailsAPI = (match)  => async (dispatch, getState) => {
    const res =   await fetch(`https://app.ticketmaster.com/discovery/v2/events/${match.params.id}.json?apikey=ckkAjaoFXB0PY72OcQT2UinV6PReL8m4`);
    const result = await res.json();
    const {dates, images, name, classifications, _embedded } = result;
    const {genre, segment, subGenre} = classifications[0];
    const {country, city, state, address} =_embedded.venues[0] 
    
    
    //event name and backgroundImage
    const eventImage = images[0].url;
    const eventName = name;
    
    //genre data
    const eventType = genre.name;
    const eventGenre = segment.name;
    const eventsubGenre = subGenre.name;
    
    //event location data
    const eventCountry = country.name;
    const eventCity = city.name;
    const eventState = state.name;
    const eventAddress = address.line1;
    
    // event time data
    const eventDate = dates.start.localDate;
    const eventTime = dates.start.localTime;
    const eventTimezone = dates.start.timezone;

    let eventData = {
        eventImage, 
        eventName, 
        eventType, 
        eventGenre, 
        eventsubGenre,
        eventCountry,
        eventCity,
        eventState,
        eventAddress,
        eventDate,
        eventTime,
        eventTimezone
    }
dispatch({type: ADD_EVENT_DETAILS, payLoad: eventData });
console.log(getState().details);
 }

 export default EventDetailsAPI;