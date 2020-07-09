import React from "react";
import Auxi from "../../hoc/Auxi"
import classes from "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";


const layout = (props) => (
    <Auxi>

        <Toolbar />
        <Sidedrawer />
        <main className={classes.Content}>
            {props.children}
        </main>
    </Auxi>
)


export default layout;