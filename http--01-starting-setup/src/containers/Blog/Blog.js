import React, { Component } from 'react';

// Removed bcz implemented in axios.js
// import axios from "axios";

import axios from "../../axios";

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {


    state = {

        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {

        // axios.get('https://jsonplaceholder.typicode.com/posts').then(responseData => {
        axios.get('/posts').then(responseData => {
            //  console.log(responseData);
            const posts = responseData.data.slice(0, 4);
            const updatedPosts = posts.map(post => {

                return {
                    ...post,
                    author: "Ganesh Singh"

                }
            })

            this.setState({ posts: updatedPosts });



        }).catch(error => {
            // console.log(error);
            this.setState({ error: true })
        })
    }

    postSelectedHandler = (id) => {

        this.setState({ selectedPostId: id });


    }

    render() {

        let posts = <p style={{ textAlign: 'center' }}> Something went wrong while fetching posts !! try again </p>

        if (!this.state.error) {

            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            })
        }
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />;
                </section>
            </div>
        );
    }
}

export default Blog; 