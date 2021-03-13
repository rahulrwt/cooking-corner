import { Avatar, List, ListItem, ListItemAvatar } from '@material-ui/core';
import React from 'react';

const Ingredients=({ingredient})=>{
return(
    <List>
          <ListItem>
          <ListItemAvatar>
            <Avatar>   
             
            </Avatar>
          </ListItemAvatar>
           {
               ingredient['name']
           }
          </ListItem>
        </List>

)
}
export default Ingredients;