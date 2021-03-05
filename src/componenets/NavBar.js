import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
 
const NavBar=()=>{
    return(
        <AppBar position="static">
        <Toolbar>
    <Typography align="center">Cooking Corner</Typography>
        </Toolbar>
    </AppBar>
    );
};
export default NavBar;