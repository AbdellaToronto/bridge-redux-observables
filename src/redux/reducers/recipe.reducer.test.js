// make sure to name your test files *.test.js!

import { recipeReducer, DEFAULT_STATE } from './recipe.reducer';
import { RECIPE_ACTIONS, updateSearchText } from '../actions/recipe.actions';

describe('recipe Reducer', () => {

  let recipeReducerState = recipeReducer(DEFAULT_STATE, {type: 'foo', payload: ''});

  beforeEach(() => {
    recipeReducerState = DEFAULT_STATE;
  });


  it('should have an initial state with some values set', () => {
    expect(recipeReducerState).toBeTruthy();
    expect(recipeReducerState.isError).toBeFalsy();
    expect(recipeReducerState.searchText).toBe('');
  });


  it('should update the search text when available', () => {

    expect(recipeReducerState.searchText).toBe('');
    recipeReducerState = recipeReducer(recipeReducerState, updateSearchText({target: {value: 'cake'}}));
    expect(recipeReducerState.searchText).toBe('cake');

  });

  it('should update with latest search results', () => {

    expect(recipeReducerState.list).toEqual([]);
    recipeReducerState = recipeReducer(recipeReducerState, {
      type: RECIPE_ACTIONS.RECIPES_RECEIVED_SUCCESS,
      payload: ['Deep and Dellaicious Cake', 'Mozzadella']
    });
    console.log(recipeReducerState);
    expect(recipeReducerState.list).toEqual(['Deep and Dellaicious Cake', 'Mozzadella']);

  });
});

