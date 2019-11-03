import React, { useEffect, useState, useContext } from "react";
import useApi from "../../hooks/useApi";
import { recipeObservable$ } from "../../api/recipeApi";
import ListCard from "../../components/UI/ListCard";
import { Link, BrowserRouter as Router } from "react-router-dom";

import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import IconButton from '@material-ui/core/IconButton';
import "./recipe.scss";

const Recipe = ({match}) => {
  const recipes = useApi(recipeObservable$, []);
  console.log("match", match);
  
  return (
    <div className="recipe-list">
      {recipes.map((recipe, idx) => (
        <Link key={idx} to={`/dashboard/details/${recipe.id}`} className="recipe-card">
          <ListCard card={recipe}   />
        </Link>
      ))}
    </div>
  );
};

export default Recipe;
