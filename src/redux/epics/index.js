import { combineEpics } from 'redux-observable';

import { getRecipeByNameEpic } from './recipe.epics';
import {Observable} from 'rxjs';

export default (...args) => combineEpics(
  getRecipeByNameEpic,
)(...args, {ajax: Observable.ajax})
