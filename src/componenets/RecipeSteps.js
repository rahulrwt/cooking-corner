import { Avatar, List, ListItem, ListItemAvatar, Paper,  Typography } from '@material-ui/core';
 
import React, { useEffect, useState } from 'react';
import Ingredients from './Ingredients';
import ImageIcon from '@material-ui/icons/Image';
const RecipeSteps=( {step})=>{
 
  const [ingredients,setIngredients]=useState([]);
   useEffect(() => {
     setIngredients(step.ingredients);

   }, [])
  return (
      <>
      <div style={{margin:20}}>
      <Paper variant="outlined" style={{margin:30}} />
        <h4>Step {step.number}  </h4>
        <Typography>{step.step}</Typography>
        <Typography>Ingredients </Typography>
      <List>
        { 
       
                 ingredients.map((ingredient)=>(
                    <Ingredients ingredient={ingredient} />
                 ))
                    
           }
</List>
        </div>
         </>
  )
};
export default RecipeSteps;