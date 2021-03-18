 
import './App.css';
import NavBar from './componenets/NavBar'

import { Grid } from '@material-ui/core';


import Menu from './componenets/Menu'
import RecipeDetails from './componenets/RecipeDetails';
import {Route,Switch} from "react-router-dom";
import RandomRecipes from './componenets/RandomRecipes';
import SearchResult from './componenets/SearchResult';

function App() {

  return (
    <>
          

     <NavBar />
      <Grid container>
      <Grid sm="3">

          <Menu/>
      </Grid>
          <Grid sm="6">
          <Switch>
      <Route exact path='/' component={RandomRecipes}/>
      <Route exact path='/recipedetails/:id' component={RecipeDetails}/>
      <Route exact path='/searchresult/:recipeName' component={SearchResult}/>
      <Route  component={Error}/>
      
    </Switch>  
            
        </Grid>
        <Grid sm="3">
                  
        </Grid>
      </Grid>

     </>
  );
}

export default App;
