import { List, ListItem, ListItemAvatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { getRecipeDetails } from '../api/Api';
import {Link} from 'react-router-dom';
const SimilarRecipe=({recipe})=>{
    const [similarRecipe,setSimilarRecipe]=useState({});
    useEffect(()=>{
        getRecipeDetails(recipe['id'])
        .then((data)=>{
            setSimilarRecipe(data);
             
        })
        .catch((error)=>alert("Could not load Recipe"+error))
      },[])
return(
    <List >
    <ListItem>
    <ListItemAvatar>
          
       <img   src={similarRecipe['image']} width="100"  />
     
    </ListItemAvatar >
    < a href={`/recipedetails/${recipe['id']}`} >
    {similarRecipe['title']} 
     </a>

    </ListItem>
  </List>


)
}
export default SimilarRecipe;