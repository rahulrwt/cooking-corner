import {  Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRecipeDetails } from '../api/Api';
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import RecipeSteps from './RecipeSteps';

const RecipeDetails=({id})=>{

    const [recipe,setRecipe]=useState({});
    const [steps,setSteps]=useState([]);
    useEffect(()=>{
        getRecipeDetails(id)
        .then((data)=>{
            setRecipe(data);
            setSteps(data.analyzedInstructions[0].steps);
        })
        .catch((error)=>alert("Could not load Recipe"+error))
      },[])
    
        
      return(
          <> 
          <Typography variant="h4" align="center"> {recipe['title']}</Typography>
          <img style={{width:"200",marginLeft:"25%"}}  src={recipe['image'] }alt=""/>
          <TableContainer component={Card}>
            <Table >
                <TableHead>
                    <TableRow>
                        <TableCell>Servings</TableCell>
                        <TableCell>Total Time</TableCell>
                        <TableCell>Aggregate Likes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableCell>{recipe['servings']} Servings</TableCell>
                    <TableCell>{recipe['readyInMinutes']} Min</TableCell>
                    <TableCell>{recipe['aggregateLikes']} <ThumbUpAltIcon/></TableCell>
                </TableBody>
            </Table>
            
         </TableContainer>
          {
                 steps.map((step)=>(
                    <RecipeSteps step={step} />
                 ))
                    
           }
          </>
      )
};
export default RecipeDetails;