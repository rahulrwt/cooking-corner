import { Paper,  Typography } from '@material-ui/core';
import React from 'react';
 
const RecipeSteps=( {step})=>{
 

      
  return (
      <>
      <div style={{margin:20}}>
      <Paper variant="outlined" style={{margin:30}} />
        <h4>Step {step.number}  </h4>
        <Typography>{step.step}</Typography>
        </div>
         </>
  )
};
export default RecipeSteps;