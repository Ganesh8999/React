import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

// Removed bcz implemented in axios.js
// import axios from "axios";

import axios from "../../axios";
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import Post from "./FullPost/FullPost"
import './Blog.css';

class Blog extends Component {

    state = {
        auth: false
    }

    render() {

        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts/"
                                exact
                                activeClassName="link-Active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }} >Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: "/new-post",
                                hash: '#submit',
                                search: '?quick-Submit=true'
                            }} >New Post</NavLink></li>

                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" render={() => <h1>Home2</h1>} /> */}

                <Switch>
                    {this.state.auth ? <Route path="/new-post" component={NewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    <Redirect from="/" to="/posts" />
                    {/* <Route path="/" component={Posts} /> */}


                </Switch>
            </div>
        );
    }
}

export default Blog; 