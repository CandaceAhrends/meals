import React from "react";
import TextField from "@material-ui/core/TextField";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./drawerStyles";

const pluck = arr => arr[0];

class ResponsiveDrawer extends React.Component {
  constructor(props) {
    super(props);
 
    const initialMenuItem = pluck(this.props.config);
    this.state = {
      mobileOpen: false,
      expanded: "one",
      menuRender: initialMenuItem.render
    };
    props.pageChange(initialMenuItem.title);
  }

  handleDrawerToggle = () => {
    this.setState(state => ({ mobileOpen: !state.mobileOpen }));
  };
  // handleMenuClick = menuItem => {
  //   this.props.pageChange(menuItem.title);
  //   this.setState({
  //     menuRender: menuItem.render
  //   });
  // };
  render() {
    const { classes, theme } = this.props;
    console.log("props ", this.props.config);
    const drawer = (
      <div className="classes.menuList">
        <div className={classes.toolbar} />

        <List>
          {this.props.config.map((menuItem, index) => (
            <Link
              to={menuItem.link}
              className={classes.menuLink}
              key={index}
              color='primary'
            >
              <span style={{ padding: "4px" }}>
                {menuItem.renderIcon()} {menuItem.title}
              </span>
            </Link>
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
          
            {this.props.renderRoutes()}
           
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
