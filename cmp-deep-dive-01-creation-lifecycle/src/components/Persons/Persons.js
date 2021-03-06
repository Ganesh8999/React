import React, { Component } from 'react';
import Person from "./Person/Person"
import withClassHOC from "../../hoc/withClassHOC"
import classes from "../../components/Persons/Person/Person.css"


class Persons extends Component {

  // not avaialble in newr version
  // componentWillReceiveProps(props) {
  //   console.log("Persons.js   componentWillReceiveProps   " + props);

  // }

  // componentWillUpdate(){

  // }

  static getDerivedStateFromProps(props, state) {
    console.log('{Persons.js}... getDerivedStateFromProps');
    return state;

  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('{Persons.js}... shouldComponentUpdate');
    if (
      nextProps.persons !== this.props.persons ||
      nextProps.changed !== this.props.changed ||
      nextProps.clicked !== this.props.clicked ||
      nextProps.isAuthenticated !== this.porps.isAuthenticated
    ) {

      return true;
    } else {
      return false;
    }

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('{Persons.js}...getSnapshotBeforeUpdate ');
    return { message: "snapshot taken before update!!" };

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('{Persons.js}...componentDidUpdate ');
    console.log(snapshot);


  }

  componentWillUnmount() {
    console.log("Persons.js  componentWillUnmount");

  }

  render() {
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.key}
          changed={event => this.props.changed(event, person.id)}
        />

      )
    });

  }

}

export default withClassHOC(Persons, classes.Person);
