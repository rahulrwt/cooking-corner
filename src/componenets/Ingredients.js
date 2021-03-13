import { Avatar, List, ListItem, ListItemAvatar } from '@material-ui/core';
import React from 'react';

const Ingredients=({ingredient})=>{
    const imageUrl="https://spoonacular.com/cdn/ingredients_250x250/";
    const imageName=ingredient['image'];

    
return(
       
    <List  >
          <ListItem>
          <ListItemAvatar>
                
             <img   src={imageUrl+imageName} width="50"  />
           
          </ListItemAvatar >
           {
               ingredient['name']
           }
          </ListItem>
        </List>

)
}
export default Ingredients;