import { combineReducers } from 'redux';
import ScenesReducer from './reducer_scenes'
import ProjectsReducer from './reducer_projects'
import AuthReducer from './reducer_auth'
import { reducer as formReducer } from 'redux-form'

const rootReducer = combineReducers({
  scenes: ScenesReducer,
  projects: ProjectsReducer,
  auth: AuthReducer,
  form: formReducer
});

export default rootReducer;
