import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedrawer.css";
import Backdrop from "../../UI/Backdrop/Backdrop"
import Auxi from "../../../hoc/Auxi"

const sidedrawer = (props) => {

    let attachedClasses = [classes.Sidedrawer, classes.Close]

    if (props.open) {
        attachedClasses = [classes.Sidedrawer, classes.Open];
    }

    return (

        <Auxi>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(" ")}>
                {/* removed for responsive beahaviour */}
                {/* <Logo height="11%" /> */}
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxi>
    );

}

export default sidedrawer;