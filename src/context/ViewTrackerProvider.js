import React from "react";

const ViewTrackerContext = React.createContext();
const TOTAL_VIEWS = {
  totalViews: 0
};
export class ViewTrackerProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipesViewed: {}
    };
  }
  setViewed = recipe => {
    let recipeViews = this.state.recipesViewed[recipe.id] || { ...TOTAL_VIEWS };

    recipeViews.totalViews++;
    const trackedViews = {
      ...this.state.recipesViewed,
      [recipe.id]: recipeViews
    };
    this.setState({ recipesViewed: trackedViews });
  };
  getTotalViews = id => {
    return (this.state.recipesViewed[id] || { ...TOTAL_VIEWS }).totalViews;
  };
  getViewsSum = () => {
    return Object.values(this.state.recipesViewed).reduce((sum, viewed) => {
        sum += viewed.totalViews;
        return sum;
    },
    0);
  };
  render() {
    return (
      <ViewTrackerContext.Provider
        value={{
          getTotalViews: this.getTotalViews,
          setViewed: this.setViewed,
          getViewsSum: this.getViewsSum
        }}
      >
        {this.props.children}
      </ViewTrackerContext.Provider>
    );
  }
}

export const ViewTrackerConsumer = ViewTrackerContext.Consumer;
