import React, { useState } from "react"
import RecipeDetails from "./recipeDetails"
import "../app.sass"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { Card, Media, Heading, Content } from "react-bulma-components"

const Recipe = ({recipe}) => {
    const [show, setShow] = useState(false);

    const { label, image, url, ingredients } = recipe.recipe;
    const { quantity, unit } = recipe.recipe.totalNutrients.ENERC_KCAL;
    var quantityFix = quantity.toFixed();
    return(
        <Card className="recipe has-text-weight-light">
      <Card.Image src={image} alt={label} />
      <Card.Content>
        <Media>
          <Media.Item>
            <Heading className="font-title">{label}</Heading>
          </Media.Item>
        </Media>
        <Card.Footer>
        <Content>
            <a className="button card-footer-item" href={url} target="_blank" rel="noopener noreferrer">URL</a>
        </Content>
        <Content>
            <button className="button card-footer-item" onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </Content>
        <Content>
            <p className="button card-footer-item">{quantityFix} {" "} {unit}</p>
        </Content>
        </Card.Footer>
        
      </Card.Content>
    </Card>
        /*<div className="card">
        <div className="card-header">
            <p className="card-header-title is-centered">{label}</p>
        </div>
        <div className="card-image">
            <img className="is-rounded" src={image} alt={label} />
        </div>
        <div className="buttons has-addons is-centered">
            <a className="button card-footer-item" href={url} target="_blank" rel="noopener noreferrer">URL</a>
            <button className="button card-footer-item" onClick={() => setShow(!show)}>Ingredients</button>
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
            
            
            
        </div>*/
    )
}

export default Recipe