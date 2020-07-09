import React from "react";
import classes from "./Toolbar.css"
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import DrawerToggle from "../Sidedrawer/DrawerToggle/DrawerToggle"

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
        {/* removed for responsive beahaviour */}
        {/* <Logo height="80%" /> */}
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.Desktop}>
            <NavigationItems />
        </nav>
    </header>
)


export default toolbar;