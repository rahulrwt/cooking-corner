import React ,{useState} from 'react';

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
        <input
          placeholder="Search Recipe"
          value={searchRecipe}
          onChange={userInput}
          onKeyDown={handleKeyDown}
          style={{ width:'200px' , marginLeft: "auto"}}
          
        />
    )
};
export default Search;