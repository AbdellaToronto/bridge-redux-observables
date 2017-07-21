import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getRecipeByName, updateSearchText, updateFilterText } from './redux/actions/recipe.actions';


// remember, props should now have data coming in from redux state!
// because of this, we don't even need to make our 'top level' components stateful!
const App = props =>
  (
    <div className="App">
      <div className="App-header">
        {props.test}
        <h2>Welcome to <span className="strike">React</span> Redux-Observable!</h2>
      </div>
      <p className="App-intro">
        <input type="text" value={props.searchText}
               onChange={props.updateSearchText} />

        <input type="text" placeholder="filter" value={props.filterText}
               onChange={props.updateFilterText} />

        <button onClick={() => props.getRecipeByName(props.searchText)}>Search</button>
      </p>
      {props.recipeList.map(recipe => <h3 key={recipe.uri}>name: {recipe.label} calories: {recipe.calories}</h3>)}
    </div>
  );



const connectConfig = connect(state => ({
  firstItemInList: state.recipe.list[0],
  fullList: state.recipe.list,
  recipeList: state.recipe.list
    .filter(recipe => recipe.label.toLowerCase().includes(state.recipe.filterText.toLowerCase())),
  searchText: state.recipe.searchText,
}), { getRecipeByName, updateSearchText, updateFilterText });


export default connectConfig(App);
