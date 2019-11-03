import React, { useEffect } from 'react';
import useApi from "../../hooks/useApi";
import { recipeDetailsObservable$} from '../../api/recipeApi';

const getId = match=> match.params.id;

const RecipeDetails = ( {match})=>{
    const recipeId = getId(match);
    const details = useApi(recipeDetailsObservable$, recipeId);
 
   
    return <div> details - { JSON.stringify(details)} </div>
}

export default RecipeDetails;