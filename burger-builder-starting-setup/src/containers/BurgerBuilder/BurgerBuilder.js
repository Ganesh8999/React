import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary"



const INGREDIENTS_PRICE = {
    salad: 4.2,
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
        , totalPrice: 10,
        purchasable: false,
        purchasing: false
    }


    updatePurchasableState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(ingrKey => {
                return ingredients[ingrKey];
            })
            .reduce((sum, element) => {
                return sum + element
            }, 0);

        this.setState({ purchasable: sum > 0 });


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

        this.setState({ totalPrice: newUpdatedPriceOfBurger, ingredients: updatedIngredients });
        this.updatePurchasableState(updatedIngredients);


    }
    removeIngredientHandler = (type) => {

        const oldCount = this.state.ingredients[type];

        if (oldCount <= 0) {
            return;

        }
        const updatedCount = oldCount - 1;

        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceOfDeduction = INGREDIENTS_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newUpdatedPriceOfBurger = oldPrice - priceOfDeduction;

        this.setState({ totalPrice: newUpdatedPriceOfBurger, ingredients: updatedIngredients });
        this.updatePurchasableState(updatedIngredients);

    }

    purchasehandler = () => {

        this.setState({ purchasing: true });
    }

    render() {

        const disabledInfo = {
            ...this.state.ingredients
        };

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (

            <Auxi>
                <Modal show={this.state.purchasing}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disable={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchasehandler}
                />
            </Auxi>

        );
    }
}

export default BurgerBuilder;