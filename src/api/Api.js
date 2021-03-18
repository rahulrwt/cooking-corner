//const api_key="0a9bcac3df3145c1811c0b3f3b71d91e";
//const api_key="25be39169110496c940d68b2c4063780";
const api_key="1d31d822426a442b8e88ec60223c1a48";
//const api_key="b9b83c3ff48748be9f14c0521bd6313b";
 //const api_key="fac9c0abce67dc75be0ae3db3520a3832590b7bf";
 //const api_key="5bb763d856cb489a825829a6629496ad";


  //const api_key="fc9a55011e67482a96afd410e19682a6";
 

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

 export async function getRecipeDetails(id){
     const url=`https://api.spoonacular.com/recipes/${id}/information?apiKey=${api_key}`
        const response =await fetch(url);
        const resp=await response.json();
        console.log(resp);
        return resp;
    };

    export const getSimilarRecipe=(id)=>{
        const url=`https://api.spoonacular.com/recipes/${id}/similar?apiKey=${api_key}&number=6`
           return fetch(url)
           .then((response)=>{
              
               return response.json()
        })
           .catch((error)=>console.log(error))
       };
   
       export  async function  getRecipesBySearch( name,setRecipes,setIsLoaded){
            
        const url=`https://api.spoonacular.com/recipes/autocomplete?number=5&query=${name}&apiKey=${api_key}`;
         const response=await fetch(url);
         const resp=await response.json();
         setRecipes(resp);
         console.log(resp);
         setIsLoaded(true);
           };
    
