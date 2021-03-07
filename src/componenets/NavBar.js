import React, { useEffect, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import {   Typography } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { getRandomRecipeJoke } from '../api/Api';

const NavBar=()=>{
    const[joke,setJoke]=useState([]);
    
   useEffect(()=>{
    getRandomRecipeJoke()
    .then((data)=>{
      setJoke(data);
    })
    .catch((error)=>alert("Could not load joke"))
  },[])

  const newJoke=()=>{

    getRandomRecipeJoke()
    .then((data)=>{
      setJoke(data);
    })
    .catch((error)=>alert("Could not load joke"))

  }

    return(
        <AppBar position="static">
        <Typography align="center" >Cooking Corner </Typography> 
        <form align="right">
        <SearchIcon/>
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        </form>
         <Typography onClick={newJoke} align="center" >{joke['text']}</Typography>
         
    </AppBar>
    );
};
export default NavBar;