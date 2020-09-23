import {ADD_EVENT_DETAILS} from  '../actions/types';

const  initialState = [];
    
const DetailsReducer = (state = initialState , action) => {
    switch (action.type) {
    case ADD_EVENT_DETAILS:
        return state.push(action.payLoad);
    default:
        return state;
    }
}

export default DetailsReducer;