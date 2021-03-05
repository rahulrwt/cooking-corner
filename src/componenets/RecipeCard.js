import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import download from "../img/download.jpg"
const RecipeCard=()=>{
return(
<Card  style={{marginTop:20}}>
<CardContent>
    <Grid container direction="column" justify="center" spacing={1} alignItems="center">
        <Grid item>
            <img style={{width:200}} src={download }alt=""/>
        </Grid>
        <Grid item>
            <Typography>Recipe Name</Typography>
        </Grid>
        <Grid item>
            <Typography>Recipe Descripton</Typography>
        </Grid>
    </Grid>
</CardContent>
<CardActions>
    <Grid container justify="center">
    <Button variant="contained"
               color="primary" 
               style={{marginRight:15}}
               >
                    Show Details
                </Button>
                
    </Grid>
</CardActions>
</Card>
);
};

export default RecipeCard;