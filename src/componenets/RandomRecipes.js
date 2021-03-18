import React from 'react';

import { useEffect, useState } from 'react';
import RecipeCard from '../componenets/RecipeCard'
import {getRandomRecipes }from '../api/Api';
const RandomRecipes=()=>{
    const [recipes,setRecipes]=useState([]);
 
  useEffect(()=>{
    getRandomRecipes()
    .then((data)=>{
      setRecipes(data.recipes);
    })
    .catch((error)=>alert(error))
  },[]);

  useEffect(()=>{
    document.title="Home || Cooking Corner";
},[])

return(
  <div>
      {
    recipes.map((recipe)=>(
        <RecipeCard recipe={recipe}/>
    ))
 }
    </div>
)
}
export default RandomRecipes;