 
import './App.css';
import NavBar from './componenets/NavBar'
import RecipeCard from './componenets/RecipeCard'
import { Grid } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { getRandomRecipes } from './api/Api'
import Menu from './componenets/Menu'
function App() {
  const [recipes,setRecipes]=useState([]);
 
  useEffect(()=>{
    getRandomRecipes()
    .then((data)=>{
      setRecipes(data.recipes);
    })
    .catch((error)=>alert(error))
  },[]);
 
    
  return (
    <>
     <NavBar />
      <Grid container>
      <Grid sm="3">
          <Menu/>
      </Grid>
          <Grid sm="6">         
             { recipes.map((recipe)=>(          //changed ( to {       
              <RecipeCard recipe={recipe} /> 
             )) }
        </Grid>
        <Grid sm="3">

        </Grid>
      </Grid>

     </>
  );
}

export default App;
