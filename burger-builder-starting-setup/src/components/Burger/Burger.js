import React from "react";

import classes from "./Burger.css";
import BurgerIngredients from "../Burger/BurgerIngredients/BurgerIngredients"


const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(ingredientKey => {

            return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
                return <BurgerIngredients key={ingredientKey + i} type={ingredientKey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, [])

    if (transformedIngredients.length === 0) {

        transformedIngredients = <p>Please add more ingredients we can't serve just pieces of bread to our lovely customers</p>
    }

    console.log(transformedIngredients);


    return (

        <div className={classes.Burger}>
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />


        </div>
    )
}

export default burger;