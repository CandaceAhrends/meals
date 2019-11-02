import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
 
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  
  toolBarRoot: {
    flexGrow: 1,
    justifyContent: 'space-between'
  },
}));

export default function MainAppBar({children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={ classes.toolBarRoot}>
         {children}
        </Toolbar>
      </AppBar>
    </div>
  );
}