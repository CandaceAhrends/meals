import React from 'react';
 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper } from '@material-ui/core';

const Layout =  props => (
    <><AppBar position="static">
        <Toolbar>
            <Typography variant="headline">Heading here</Typography>
        </Toolbar>
    </AppBar>
    <Grid container >
        <Grid item xs={12} sm={12} md={2}>
        <Paper> paper</Paper>
        </Grid>
        <Grid item xs={12} sm={12} md={2}>
        <Paper> paper</Paper>
        </Grid>
    </Grid>
    </>
);
export default Layout;

