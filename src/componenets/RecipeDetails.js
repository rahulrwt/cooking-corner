import {  Paper,  Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRecipeDetails, getSimilarRecipe } from '../api/Api';
import { Card, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import RecipeSteps from './RecipeSteps';
import SimilarRecipe from './SimilarRecipes';

 
  
const RecipeDetails=({match:{params:{id}}})=>{

    const [recipe,setRecipe]=useState({});
    const [similarRecipe,setSimilarRecipe]=useState([]);
    const [steps,setSteps]=useState([]);
   


    useEffect(()=>{
        getRecipeDetails(id)
        .then((data)=>{
            console.log(data);
            setRecipe(data);
            setSteps(data.analyzedInstructions[0].steps);
        })
        .catch((error)=>alert("Could not load Recipe "+error))
      },[])
    
      useEffect(()=>{
        getSimilarRecipe(id)
        .then((data)=>{
            setSimilarRecipe(data);
              
        })
        .catch((error)=>alert("Could not load similar Recipe"+error))
      },[])
      
      useEffect(()=>{
        document.title=  recipe['title']  +"|| Cooking Corner";
    },[])
      return(
          <> 
          <Typography variant="h4" align="center"> {recipe['title']}</Typography>
          <img width="350" style={{ marginLeft:"35%"}}  src={recipe['image'] }alt=""/>
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
              <Paper variant="outlined" style={{margin:30}} />
           <Typography align="center" variant="h5">Similar Recipe</Typography>
            
            
           {

                 similarRecipe.map((recipe)=>(
                    <SimilarRecipe recipe={recipe} />
                 ))
                    
           }                  
          </>
      )
};
export default RecipeDetails;