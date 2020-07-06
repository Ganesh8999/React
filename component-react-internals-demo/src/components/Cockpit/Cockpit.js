import React from "react";
import classes from '../Cockpit/Cockpit.css'



const cockpit = (props) => {


    const colorClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red
    }
    if (props.persons.length <= 2) {
        colorClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        colorClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={colorClasses.join(" ")}>This is really working!</p>
            <button
                className={btnClass}
                alt={props.showPersons}
                onClick={props.click}
            >
                Toggle Persons
      </button>
        </div>
    );
}


export default cockpit;