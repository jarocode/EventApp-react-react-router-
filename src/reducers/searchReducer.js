import {SEARCH_EVENTS} from '../actions/types';

const initialState = {
    event: ''
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_EVENTS :
            return {...state, event:action.payload};
        default:
            return state;
    }
}
 
export default searchReducer;