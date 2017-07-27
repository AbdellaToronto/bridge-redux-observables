import { combineEpics } from 'redux-observable';

import { getRecipeByNameEpic } from './recipe.epics';
import {Observable} from 'rxjs';


// writing a combineEpic this way allows you to pass in
// a custom object as the third parameter in every single epic function
// in our case, we are providing an object that has an 'ajax' property
// which is equal to Observable.ajax - we do this to make it much easier
// to mock out in tests later on, also it makes things purer - but
// that comes with making things easier to test
export default (...args) => combineEpics(
  getRecipeByNameEpic,
)(...args, {ajax: Observable.ajax})
