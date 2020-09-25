import {combineReducers} from 'redux';
import DetailsReducer from './detailsReducer'
import {eventReducer} from './firstApiCallReducer';
import searchReducer from './searchReducer';

export default combineReducers({
    event: eventReducer,
    details: DetailsReducer,
    search: searchReducer
})
