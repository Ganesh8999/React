import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger"
import BuildControls from "../../components/Burger/BuildControls/BuildControls"


const INGREDIENTS_PRICE = {
    salad: 4,
    meat: 5,
    cheese: 3,
    bacon: 2
}

class BurgerBuilder extends Component {


    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        }
        , totalPrice: 10
    }


    addIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceOfAddtion = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newUpdatedPriceOfBurger = oldPrice + priceOfAddtion;

        this.setState({ totalPrice: newUpdatedPriceOfBurger, ingredients: updatedIngredients })


    }
    removeIngredientHandler = (type) => {


    }

    render() {
        return (

            <Auxi>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls ingredientAdded={this.addIngredientHandler} />
            </Auxi>

        );
    }
}

export default BurgerBuilder;