export const RECIPE_ACTIONS = {
  // user actions
  GET_RECIPES_BY_NAME: 'GET_RECIPES_BY_NAME',
  UPDATE_SEARCH_TEXT: 'UPDATE_SEARCH_TEXT',
  UPDATE_FILTER_TEXT: 'UPDATE_FILTER_TEXT',

  // epic actions
  RECIPES_RECEIVED_SUCCESS: 'RECIPES_RECEIVED_SUCCESS',
  RECIPES_RECEIVED_ERROR: 'RECIPES_RECEIVED_ERROR',
};

export const getRecipeByName = recipeName => ({
  type: RECIPE_ACTIONS.GET_RECIPES_BY_NAME,
  payload: recipeName
});

export const updateSearchText = searchEvent => ({
  type: RECIPE_ACTIONS.UPDATE_SEARCH_TEXT,
  payload: searchEvent.target.value
});


export const updateFilterText = filterEvent => ({
  type: RECIPE_ACTIONS.UPDATE_FILTER_TEXT,
  payload: filterEvent.target.value
});
