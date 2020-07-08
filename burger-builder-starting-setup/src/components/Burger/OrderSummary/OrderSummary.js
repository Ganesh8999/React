import React from "react"
import Auxi from "../../../hoc/Auxi"
import Button from "../../UI/Button/Button"


const orderSummary = (props) => {


    const ingredientSummary = Object.keys(props.ingredients).map(ingrKey => {

        return <li key={ingrKey}>
            <span style={{ textTransform: 'capitalize' }}> {ingrKey}</span>
             :
              {props.ingredients[ingrKey]}
        </li>
    });


    return (
        <Auxi>
            <h3>Your Order </h3>
            <p> A delicious and amazing burger with the following arguments ,,Yummy :) </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>COntinue to checkout</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>


        </Auxi>
    )

}


export default orderSummary;