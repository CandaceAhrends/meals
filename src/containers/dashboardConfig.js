import React from 'react';
import FastfoodSharpIcon from "@material-ui/icons/FastfoodSharp";
import CreateIcon from "@material-ui/icons/Create";
import Recipe from '../containers/recipe/Recipe';

export const drawerConfig = [
    {
      title: "Recipes",
      renderIcon: () => <FastfoodSharpIcon />,
      render: () => <Recipe/>
    },
    {
      title: "Diary",
      renderIcon: () => <CreateIcon />,
      render: () => <div>diary</div>
    }
  ];
