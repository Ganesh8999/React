import React, { Component } from "react";
import Auxi from "../../hoc/Auxi"
import classes from "./Layout.css"
import Toolbar from "../Navigation/Toolbar/Toolbar";
import Sidedrawer from "../Navigation/Sidedrawer/Sidedrawer";


class Layout extends Component {
    state = {

        showSideDrawer: false

    }


    sideDrawerClosedHadnler = (props) => {
        this.setState({ showSideDrawer: true })

    }


    sideDrawerToggleHandler = (props) => {

        this.setState((prevState) => {

            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }


    render() {

        return (

            <Auxi>

                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <Sidedrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHadnler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        )
    }

}


export default Layout;