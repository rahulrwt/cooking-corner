import logo from './logo.svg';
import './App.css';
import NavBar from './componenets/NavBar'
import RecipeCard from './componenets/RecipeCard'
import { Grid } from '@material-ui/core';
function App() {
  return (
    <>
     <NavBar/>
      <Grid container>
        
      <Grid sm="3">

      </Grid>
<Grid sm="6">
<RecipeCard/> 
        </Grid>
        <Grid sm="3">

        </Grid>
      </Grid>
       
        
 
    
     </>
  );
}

export default App;
