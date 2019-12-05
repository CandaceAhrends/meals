import React from "react";
import PropTypes from "prop-types";
 
import { connect } from "react-redux";
import { attemptLogout, PAGE_CHANGE } from "../../actions";
import {   withRouter } from "react-router-dom";

import MainAppBar from "../../components/UI/MainAppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

 

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.logoutUser = this.logoutUser.bind(this);
  }
  componentDidMount() {
    this.props.getUser();
  }
  logoutUser(router) {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <MainAppBar>
        {this.props.loggedIn ? (
          <span className="app-bar-welcome">
            <Typography variant="h6" color="inherit">
              Welcome {this.props.user}
            </Typography>
          </span>
        ) : null}
        <Typography variant="h6" color="inherit">
          {this.props.pageTitle}
        </Typography>
        {this.props.loggedIn ? (
          <Button onClick={this.logoutUser} color="inherit">
            Log out
          </Button>
        ) : null}
      </MainAppBar>
    );
  }
}
const mapStateToProps = state => {
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
  )(NavBar)
);
