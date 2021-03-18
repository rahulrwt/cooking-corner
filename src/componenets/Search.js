import { Button } from '@material-ui/core';
import React ,{useState} from 'react';
import SearchResult from './SearchResult';
import {Link} from 'react-router-dom';
const Search=()=>{
    const [searchRecipe,setSearchRecipe]=useState([]);
    const userInput=e=>{
        setSearchRecipe(e.target.value);
    }


    const handleKeyDown=e=>{
        if (e.key === 'Enter') {
            console.log('do validate');
          } 
    }
    
    return(
        <form
         >
        <input
          placeholder="Search Recipe"
          value={searchRecipe}
          onChange={userInput}
          onKeyDown={handleKeyDown}
          style={{ width:'200px' , marginLeft: "auto"}}
          
        />
         <Link to={`/searchresult/${searchRecipe}`}>
         <Button
         variant="contained"
               color="primary"
               style={{marginRight:15}}>search</Button>
         </Link>
        
        </form>
    )
};
export default Search;