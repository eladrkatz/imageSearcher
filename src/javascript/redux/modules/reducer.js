import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import auth from './auth';
import users from './users';
import blogposts from './blogposts';
import draft from './draft';
import imageSearches from './imageSearches'

export default combineReducers({
  auth,
  users,
  blogposts,
  draft,
  form,
  imageSearches
});
