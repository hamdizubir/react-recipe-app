import React from 'react'
import style from './recipe.module.css';

const Recipes = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>{calories} Calories</p>
            <ol>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <img className={style.image} src={image}/>
        </div>
    )
}

export default Recipes;