import React from "react"
import Auxi from "../../../hoc/Auxi"


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
            <button>Cancel</button>
            <button>Continue</button>


        </Auxi>
    )

}


export default orderSummary;