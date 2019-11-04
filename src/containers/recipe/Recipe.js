import React, { useEffect, useState, useContext } from "react";
import useApi from "../../hooks/useApi";
import { recipeObservable$ } from "../../api/recipeApi";
import ListCard from "../../components/UI/ListCard";
import { Link } from "react-router-dom";

 
import "./recipe.scss";

const Recipe = ( {match}) => {
  const recipes = useApi(recipeObservable$, 'salmon');
 console.log("match in recipe", match);
  
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
