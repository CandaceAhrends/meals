import React, { useEffect, useContext } from "react";
import useApi from "../../hooks/useApi";
import { recipeDetailsObservable$ } from "../../api/recipeApi";
import AddRoundedIcon from "@material-ui/icons/AddRounded";
import { StoreContext, ADD_MEAL } from "../../context/store";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Image from "material-ui-image";
import Button from "@material-ui/core/Button";
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import List from "@material-ui/core/List";
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from "@material-ui/core/ListItem";
import "./details.scss";

const getId = match => match.params.id;

const RecipeDetails = ({ match }) => {
  const recipeId = getId(match);
  console.log("match in deatila", match);
  const details = useApi(recipeDetailsObservable$, recipeId, {});
  const { state, dispatch } = useContext(StoreContext);

  const addMeal = () => {
    dispatch({ type: ADD_MEAL, payload: recipeId });
  };
  const descriptionStyle = {
    position: "absolute",
    bottom: 0,
    content: "test new",

    background: "rgba(0,0,0,.3)",
    height: "70px",
    width: "100%"
  };
  const textStyle = {
    position: "absolute",
    bottom: "20px",
    fontSize: "2rem",
    color: "white"
  };
  return (
    <div className="detail">
      <nav>
        <Link to="/dashboard/recipes">
          <Button
            
          
            startIcon={<NavigateBeforeRoundedIcon />}
          >
            Back
          </Button>
        </Link>
        <Button
          
           
          startIcon={<AddRoundedIcon />}
          onClick={addMeal}
        >
          Add to diary
        </Button>
      </nav>
      <div className="detail-wrapper">
        <div className="detail-wrapper-image">
          {details.image ? <Image aspectRatio={2} src={details.image} /> : null}
        </div>
        <div style={descriptionStyle}></div>
        <div style={textStyle}>{details.title}</div>
      </div>
      <div>
        <div style={{ height: "55px", marginTop: "20px" }}>
          <Typography align="left" variant="h5" gutterBottom>
            Steps
          </Typography>
        </div>
      </div>
      {details.instructions ? (
        <List  style={{textAlign: 'start'}} >
          {details.instructions.map((detail, idx) => (
            <ListItemText
              key={idx}
              primary={detail.name}
              secondary={`  ${detail.step}`}
            />
          ))}
        </List>
      ) : null}
     
    </div>
  );
};

export default RecipeDetails;
