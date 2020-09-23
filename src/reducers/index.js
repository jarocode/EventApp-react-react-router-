import {combineReducers} from 'redux';
import DetailsReducer from './detailsReducer'
import {eventReducer} from './firstApiCallReducer';

export default combineReducers({
    event: eventReducer,
    details: DetailsReducer
})
