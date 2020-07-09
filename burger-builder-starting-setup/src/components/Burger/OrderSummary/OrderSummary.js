import React, { Component } from "react"
import Auxi from "../../../hoc/Auxi"
import Button from "../../UI/Button/Button"
import logo from "../../Logo/Logo";


class OrderSummary extends Component {

    componentDidUpdate() {
        console.log("OrderSummary componentDidUpdate");

    }


    render() {

        const ingredientSummary = Object.keys(this.props.ingredients).map(ingrKey => {

            return <li key={ingrKey}>
                <span style={{ textTransform: 'capitalize' }}> {ingrKey}</span>
                 :
                  {this.props.ingredients[ingrKey]}
            </li>
        });

        return (

            <Auxi>
                <h3>Your Order </h3>
                <p> A delicious and amazing burger with the following arguments ,,Yummy :) </p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price : {this.props.price}</strong></p>
                <p>COntinue to checkout</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinued}>Continue</Button>


            </Auxi>
        )

    }

}


export default OrderSummary;