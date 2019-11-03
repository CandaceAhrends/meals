import React, { useEffect, useContext } from 'react';
import useApi from "../../hooks/useApi";
import { recipeDetailsObservable$} from '../../api/recipeApi';
import { StoreContext, ADD_MEAL } from "../../context/store";
const getId = match=> match.params.id;

const RecipeDetails = ( {match})=>{
    const recipeId = getId(match);
    const details = useApi(recipeDetailsObservable$, recipeId);
    const {state, dispatch} = useContext(StoreContext);
   
  
    const addMeal = ()=> {
        dispatch( { type: ADD_MEAL, payload: recipeId });
    } 
     //return <div><button onClick={addMeal}>Add Meal</button> details - { JSON.stringify(details)} </div>
    return <div style={{marginTop: '100px'}} className="detail">
    test detail page
    </div>
}

export default RecipeDetails;