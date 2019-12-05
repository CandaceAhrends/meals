import React from "react";
import PropTypes from "prop-types";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import { PAGE_CHANGE } from "../actions";
import { withRouter } from "react-router-dom";
import NavBar from "./Nav/NavBar";
import ResponsiveDrawer from "../components/UI/Drawer";
import { ViewTrackerConsumer } from "../context/ViewTrackerProvider";
import { drawerConfig, renderRoutes } from "./dashboardConfig";
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
        <ViewTrackerConsumer>
         
          {({getViewsSum}) => <NavBar pageTitle={`Total Recipes viewed: ${getViewsSum()}`} />}
        </ViewTrackerConsumer>
        <ResponsiveDrawer
          config={drawerConfig}
          renderRoutes={renderRoutes}
          pageChange={this.props.pageChange}
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
