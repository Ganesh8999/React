import React, { Component } from 'react';
import PropTypes from "prop-types"

import classes from './Person.css';

class Person extends Component {

  constructor(props) {
    super(props);
    this.lastInputElementRef = React.createRef()
  }
  componentDidMount() {
    // first way
    // this.lastInputElement.focus();

    // 2nd way
    this.lastInputElementRef.current.focus()
  }

  render() {
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
      </p>
        <p>{this.props.children}</p>
        {/* <input type="text" onChange={this.props.changed} value={this.props.name} /> */}
        {/* first way of implement Refs  by using function*/}
        {/* <input type="text" ref={(inputEl) => { this.lastInputElement = inputEl }} onChange={this.props.changed} value={this.props.name} /> */}

        <input type="text" ref={this.lastInputElementRef} onChange={this.props.changed} value={this.props.name} />

      </div>
    );
  }
};


Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default Person;
