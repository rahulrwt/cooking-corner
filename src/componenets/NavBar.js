import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {   Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getRandomRecipeJoke } from '../api/Api';
 
import {Link} from 'react-router-dom';
import cooking_corner from "../img/cookingCorner.png";
import Search from './Search';
const NavBar=()=>{
    const[joke,setJoke]=useState([]);
    
   useEffect(()=>{
    getRandomRecipeJoke()
    .then((data)=>{
      setJoke(data);
    })
    .catch((error)=>alert("Could not load joke"+error))
  },[])

  const newJoke=()=>{

    getRandomRecipeJoke()
    .then((data)=>{
      setJoke(data);
    })
    .catch((error)=>alert("Could not load joke"))

  }

    return(
        <AppBar position="static"  >
          <Link exact to ="/" style={{ alignSelf: 'center' }}>
        <img  src={cooking_corner} alt="logo" />
        </Link>
         <Search/>
         <Typography onClick={newJoke} align="center" >{joke['text']}</Typography>
         
    </AppBar>
    );
};
export default NavBar;