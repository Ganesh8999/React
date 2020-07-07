import React, { Component } from 'react';
import PropTypes from "prop-types"
import AuthContext from "../../../context/auth-context"

import classes from './Person.css';
import auxi from '../../../hoc/Auxi';

class Person extends Component {



  constructor(props) {
    super(props);
    this.lastInputElementRef = React.createRef()
  }

  static contextType = AuthContext;


  componentDidMount() {
    // first way
    // this.lastInputElement.focus();

    // 2nd way
    this.lastInputElementRef.current.focus()

    console.log(this.context.authenticated);

  }


  render() {
    return (
      <auxi>

        {/* <AuthContext.Consumer>

          {(context) => context.authenticated ? <p>Authenticated </p> : <p>Please Login</p>}
        </AuthContext.Consumer> */}

        {this.context.authenticated ? <p>Authenticated </p> : <p>Please Login</p>}

        <p onClick={this.props.clicked}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p>{this.props.children}</p>
        {/* <input type="text" onChange={this.props.changed} value={this.props.name} /> */}
        {/* first way of implement Refs  by using function*/}
        {/* <input type="text" ref={(inputEl) => { this.lastInputElement = inputEl }} onChange={this.props.changed} value={this.props.name} /> */}

        <input type="text" ref={this.lastInputElementRef} onChange={this.props.changed} value={this.props.name} />


      </auxi>

    );
  }

  // render() {
  //   return (
  //     <div className={classes.Person}>
  //       <p onClick={this.props.click}>
  //         I'm {this.props.name} and I am {this.props.age} years old!
  //     </p>
  //       <p>{this.props.children}</p>
  //       {/* <input type="text" onChange={this.props.changed} value={this.props.name} /> */}
  //       {/* first way of implement Refs  by using function*/}
  //       {/* <input type="text" ref={(inputEl) => { this.lastInputElement = inputEl }} onChange={this.props.changed} value={this.props.name} /> */}

  //       <input type="text" ref={this.lastInputElementRef} onChange={this.props.changed} value={this.props.name} />

  //     </div>
  //   );
  // }
};


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;
