import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { PAGE_CHANGE } from "../actions";
import { withRouter } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import ResponsiveDrawer from "../components/UI/Drawer";
import RecipeDetails from "./recipe/Details";

import { drawerConfig } from "./dashboardConfig";

import "./dashboard.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {}

  render() {
    console.log("props> ", this.props.match);
    return (
      <>
         
       
        <NavBar />
        <ResponsiveDrawer
          config={drawerConfig}
          pageChange={this.props.pageChange}
        />
         <Route
          path="/dashboard/:page/:id/"
          render={() => <h3>Please select a section:</h3>}
        />
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    pageTitle: state.appReducer.page
  };
};
const mapDispatchToProps = dispatch => {
  return {
    pageChange: page => dispatch({ type: PAGE_CHANGE, payload: page })
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Dashboard)
);
