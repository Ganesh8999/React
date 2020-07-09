import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./Sidedrawer.css";

const sidedrawer = () => {


    return (

        <div className={classes.Sidedrawer}>
            {/* removed for responsive beahaviour */}
            {/* <Logo height="11%" /> */}
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    );

}

export default sidedrawer;