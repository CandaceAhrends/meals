import React from "react";
import PropTypes from "prop-types";
 
import IconButton from "@material-ui/core/IconButton";
import { connect } from "react-redux";
import { attemptLogout } from "../actions";
import { NavLink, Redirect, withRouter } from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
 
import MainAppBar from "../components/UI/MainAppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ResponsiveDrawer from "../components/UI/Drawer";
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import CreateIcon from "@material-ui/icons/Create";
 
import "./dashboard.scss";

const drawerConfig = [
  {
    title: "Recipe's",
    renderIcon: () => <FastfoodSharpIcon />,
    render: () => <div>recipe</div>
  },
  {
    title: "Diary",
    renderIcon: () => <CreateIcon />,
    render: () => <div>diary</div>
  }
];

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
    console.log("getting user");
  }
  logoutUser(router) {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
     
    return (
      <>
        <MainAppBar>
          {this.props.loggedIn ? (
            <span className="app-bar-welcome">
              <Typography variant="h6" color="inherit">
                Welcome {this.props.user}
              </Typography>
            </span>
          ) : (
            null
          )}

          {this.props.loggedIn ? (
            <Button onClick={this.logoutUser} color="inherit">
              Log out
            </Button>
          ) : (
             null
          )}
        </MainAppBar>

        <ResponsiveDrawer config={drawerConfig} />
      </>
    );
  }
}
const mapStateToProps = state => {
  console.log("mapping NAV state", state);
  return {
    loggedIn: state.loginReducer.authenticated,
    user: state.loginReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch({ type: "USER" }),
    logout: user => dispatch(attemptLogout())
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
