import { Button, Card, CardActions, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import { Markup } from 'interweave';
const RecipeCard=({recipe})=>{
return(
<Card  style={{marginTop:20}}>
<CardContent>
    <Grid container direction="column" justify="center" spacing={1} alignItems="center">
        <Grid item>
            <img style={{width:400}} src={recipe['image'] }alt=""/>
        </Grid>
        <Grid item>
            <Typography variant="h5" align="center">{recipe['title']}</Typography>
        </Grid>
        <Grid item>
        <Markup  content={recipe['summary']} />
 
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