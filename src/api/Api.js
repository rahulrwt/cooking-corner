const api_key="0a9bcac3df3145c1811c0b3f3b71d91e";

export const getRandomRecipes=()=>{
    const url=`https://api.spoonacular.com/recipes/random?apiKey=${api_key}&limitLicense=true&number=1&tags=vegetarian`;
    return fetch(url)
    .then((response)=>response.json())
    .catch((error)=>console.log(error))

}