import React from "react";
import classes from "./BuildControls.css"
import BuildControl from "./BuildControl/BuildControl"

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Meat', type: 'meat' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },

]

const buildControls = (props) => (

    <div className={classes.BuildControls}>

        <p>Price of Burger:  <strong>{props.price.toFixed(2)}  Rs. </strong></p>

        {controls.map(cntrl => (
            <BuildControl
                key={cntrl.label}
                label={cntrl.label}
                ingrAdded={() => props.ingredientAdded(cntrl.type)}
                ingrRemoved={() => props.ingredientRemoved(cntrl.type)}
                disable={() => props.disabled[cntrl.type]}
            />
        ))}

        <button className={classes.OrderButton}
            disabled={!props.purchasable}
        >Order Now ! your stomach deserve this burger :) </button>
    </div>

);


export default buildControls;
