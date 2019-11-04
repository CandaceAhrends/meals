import React from "react";
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import CreateIcon from "@material-ui/icons/Create";
import Diary from "./Diary/Diary";
import Recipe from "./recipe/Recipe";
import RecipeDetails from "./recipe/Details";
import { Link, Route } from "react-router-dom";
export const drawerConfig = [
  {
    title: "Recipes",
    renderIcon: () => <FastfoodSharpIcon />,
    link: "/dashboard/recipes"
  },
  {
    title: "Diary",
    renderIcon: () => <CreateIcon />,
    link: "/dashboard/diary"
  }
];

export const renderRoutes = () => {
  return (
    <>
       
      <Route path={`/dashboard/recipes`} component={Recipe} />
      <Route path={`/dashboard/diary`} component={Diary} />
      <Route path={`/dashboard/details/:id`} component={RecipeDetails} />
    </>
  );
};
