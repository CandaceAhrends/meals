import React from 'react';
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import CreateIcon from "@material-ui/icons/Create";
import Recipe from '../containers/recipe/Recipe';
import Diary from '../containers/Diary/Diary';
export const drawerConfig = [
    {
      title: "Recipes",
      renderIcon: () => <FastfoodSharpIcon />,
      render: () => <Recipe/>
    },
    {
      title: "Diary",
      renderIcon: () => <CreateIcon />,
      render: () => <Diary/>
    }
  ];
