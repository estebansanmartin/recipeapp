import React from "react"
import {v4 as uuidv4} from "uuid"
const recipeDetails = ({ingredients}) => {
    return ingredients.map(ingredient => {
        return (
            <ul key={uuidv4()} className="list">
                <li className="listText">-{ingredient.text}</li>
                <li className="listText">{ingredient.weight.toFixed()} g.</li>
            </ul>
        );
    });
};

export default recipeDetails;