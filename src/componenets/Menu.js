 
import { MenuItem, MenuList, Paper } from "@material-ui/core";
import React from "react"
 const Menu=()=>{
    return(
<div  >
      <Paper  >
        <MenuList>
          <MenuItem>Search Recipe</MenuItem>
          <MenuItem>Random Food Joke</MenuItem>
          <MenuItem>Random Food Trivia</MenuItem>
        </MenuList>
      </Paper>
      </div>
    )
}
export default Menu;