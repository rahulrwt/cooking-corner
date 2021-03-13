import { Typography } from '@material-ui/core';
import React from 'react';

const SimilarRecipe=({recipe})=>{
return(
    <List  >
    <ListItem>
    <ListItemAvatar>
          
       <img   src={} width="50"  />
     
    </ListItemAvatar >
     {
         recipe['title']
     }
    </ListItem>
  </List>


)
}
export default SimilarRecipe;