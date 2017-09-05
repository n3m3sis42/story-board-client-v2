import { combineReducers } from 'redux';
import ScenesReducer from './reducer_scenes'
import ProjectsReducer from './reducer_projects'
import ActiveScene from './reducer_active_scene'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  scenes: ScenesReducer,
  projects: ProjectsReducer,
  form: formReducer,
  activeScene: ActiveScene
});

export default rootReducer;
