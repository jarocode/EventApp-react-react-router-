import {ADD_EVENTS, CHANGE_HEADER} from '../actions/types';


const initialState = {
    header: 'Upcoming',
    restOfState: 0
};
export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_EVENTS:
            return {...state , restOfState : action.payload};
        case CHANGE_HEADER:
            return {...state , header : action.payload};
        default :
        return state;
         
    }
}


    
