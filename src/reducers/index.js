import { combineReducers } from 'redux';
import journey from './journey';
import departures from './departures';

export default combineReducers({
  journey,
  departures,
});
