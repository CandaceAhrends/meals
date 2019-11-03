import React from "react";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";
 
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
 
import { styles } from "./drawerStyles";

const pluck = arr=>arr[0];

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    expanded: "one",
    menuRender:  pluck(this.props.config).render
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  handleMenuClick = (render) => {
     
    this.setState( {
      menuRender: render
    })
  };
  render() {
    const { classes, theme } = this.props;
    console.log("props ", this.props.config);
    const drawer = (
      <div className="classes.menuList">
        <div className={classes.toolbar} />

        <List >
          {this.props.config.map((menuItem, index) => (
            <ListItem
              button
              key={index}
              onClick={() =>  this.handleMenuClick(menuItem.render)}
            >
              <ListItemIcon> {menuItem.renderIcon()}</ListItemIcon>
              <ListItemText primary={menuItem.title} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    
    return (
      <div className={classes.root}>
        <CssBaseline />

        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
        <main className={classes.content}>
          <Grid container spacing={24} className={classes.conentWrapper}>
            <Grid item xs={12}>
              {this.state.menuRender()}
            </Grid>
          </Grid>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
