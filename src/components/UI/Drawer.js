import React from "react";
import TextField from "@material-ui/core/TextField";

import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";

import Drawer from "@material-ui/core/Drawer";

import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

import FocusInput from "./FocusInput";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Input from "@material-ui/core/Input";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import FilledInput from "@material-ui/core/FilledInput";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { styles } from "./drawerStyles";


class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false,
    expanded: "one",
    menuRender: ()=><div>menu r</div>
  };

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  handleMenuClick = (menuItem) => {
    this.setState( {
      menuRender: menuItem.render
    })
  };
  render() {
    const { classes, theme } = this.props;
    console.log("props ", this.props.config);
    const drawer = (
      <div>
        <div className={classes.toolbar} />

        <List>
          {this.props.config.map((menuItem, index) => (
            <ListItem
              button
              key={index}
              onClick={() => this.handleMenuClick(menuItem)}
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
