import React, { useEffect, useState, useContext } from "react";
import useApi from "../../hooks/useApi";
import { recipeObservable$ } from "../../api/recipeApi";
import ListCard from "../../components/UI/ListCard";
import { Link } from "react-router-dom";
import { ViewTrackerConsumer } from "../../context/ViewTrackerProvider";
import PropTypes from 'prop-types';
import "./recipe.scss";

const Recipe = ({ match }) => {
  const recipes = useApi(recipeObservable$, "salmon"); //NOT IMPLEMENTED YET
  const Viewed = ({trackedViews}) => (
    <span className="recipe-list-viewed">{`Viewed ${JSON.stringify(trackedViews)} times`}</span>
  );
  return (
    <ViewTrackerConsumer>
      {({ getTotalViews, setViewed }) => (
        <div className="recipe-list">
          {recipes.map((recipe, idx) => (
            <Link
              onClick={() => setViewed(recipe)}
              key={idx}
              to={`/dashboard/details/${recipe.id}`}
              className="recipe-card"
            >
              <ListCard card={recipe} />

              <Viewed trackedViews={getTotalViews(recipe.id)} />
            </Link>
          ))}
        </div>
      )}
    </ViewTrackerConsumer>
  );
};
Recipe.propTypes = {
  match: PropTypes.string
}
export default Recipe;
