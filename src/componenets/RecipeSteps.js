import { Typography } from '@material-ui/core';
import React from 'react';

const RecipeSteps=( {step})=>{
 

      
  return (
      <>
        <h4>Step {step.number}  </h4>
        <Typography>{step.step}</Typography>
         </>
  )
};
export default RecipeSteps;