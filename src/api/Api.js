//const api_key="0a9bcac3df3145c1811c0b3f3b71d91e";
//const api_key="25be39169110496c940d68b2c4063780";
const api_key="1d31d822426a442b8e88ec60223c1a48";


export const getRandomRecipes=()=>{
    const url=`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&limitLicense=true&number=5&tags=vegetarian`;
    return fetch(url)
.then((response)=>response.json())
    .catch((error)=>console.log(error))
};
export const getRandomRecipeJoke=()=>{
     const url=`https://api.spoonacular.com/food/jokes/random?apiKey=${api_key}`;
     return fetch(url)
     .then((response)=>response.json())
     .catch((error)=>console.log(error))
 };

 export const getRecipeDetails=(id)=>{
     const url=`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`
        return fetch(url)
        .then((response)=>response.json())
        .catch((error)=>console.log(error))
    };

    export const getSimilarRecipe=(id)=>{
        const url=`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${api_key}&number=6`
           return fetch(url)
           .then((response)=>response.json())
           .catch((error)=>console.log(error))
       };
   