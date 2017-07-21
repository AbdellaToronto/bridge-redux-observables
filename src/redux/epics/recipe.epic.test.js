import { ActionsObservable } from 'redux-observable';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { getRecipeByNameEpic } from './recipe.epics.js';
import { RECIPE_ACTIONS } from '../actions/recipe.actions';


// this creates an action observable, allowing us to fake an action that our epic can hear
const action$ = ActionsObservable.of(
  {type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME, payload: 'chocolate'}
);


describe('getRecipeByName Epic', () => {

  it('dispatches the correct action when it is successful', (done) => {
    const ajax = () => Observable.of({ response: { hits: [] }}); // this will be replacing our ajax call!


    getRecipeByNameEpic(action$, null, { ajax })
      .subscribe(result => {
        expect(result.type).toBe(RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS);
        done();
      })

  });
});
