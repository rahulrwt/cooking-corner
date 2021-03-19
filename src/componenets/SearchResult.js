import React, { useEffect, useState } from 'react';
import { getRecipeDetails, getRecipesBySearch } from '../api/Api';
import RecipeCard from './RecipeCard';
 

const SearchResult=({match:{params:{recipeName}}})=>{
    const [recipes,setRecipes]=useState(null);
    const [isLoaded,setIsLoaded]=useState(false);
    const [recipeDetails,setRecipeDetails]=useState(null);
    const [num,setNum]=useState();
    
 
    useEffect( ()=>{
      if(isLoaded==false)
   {
       getRecipesBySearch(recipeName,setRecipes,setIsLoaded)
  }
      else
        {
          recipes.map((recipe)=>{
        const res=getRecipeDetails(recipe.id)
        res.then((response)=>{
          console.log(response);
           setRecipeDetails(recipeDetails=>[...recipeDetails,response])
        })
        .catch((error)=>{
          console.log("Error While Loading"+error)
        })
      })
  }
    },[isLoaded])
  
      
 if(isLoaded)
   {
      if(recipeDetails!=null)
    {
      return(       
        <div> 
          {
          recipeDetails.map((recipe)=>(
              <RecipeCard  recipe={recipe}/>
          ))
       }

    </div>
   )
  }
  else
  {
return <div> 
    <h1>No Such Recipe Found</h1>

    </div>
  }
}
   else{
     return<h1>Loading</h1>
   }
   
}
export default SearchResult;