import { combineReducers } from 'redux';
import ScenesReducer from './reducer_scenes'
import ActiveScene from './reducer_active_scene'

const rootReducer = combineReducers({
  scenes: ScenesReducer,
  activeScene: ActiveScene
});

export default rootReducer;
