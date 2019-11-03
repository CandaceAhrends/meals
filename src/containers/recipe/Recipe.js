import React, { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import { recipeObservable$ } from "../../api/recipeApi";
import ListCard from "../../components/UI/ListCard";
import {   Link, BrowserRouter as Router } from "react-router-dom";
import "./recipe.scss";

const Recipe = () => {
  const recipes = useApi(recipeObservable$, []);
 
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
         <Link to={`/details/${recipe.id}`} className="recipe-card">
         <ListCard card={recipe} />
         </Link> 
      ))}
    </div>
  );
};

export default Recipe;
