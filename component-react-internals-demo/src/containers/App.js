import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry"
import Persons from "../components/Persons/Persons.js"
import Cockpit from "../components/Cockpit/Cockpit"

import classes from "./App.css";
import Radium from "radium";


class App extends Component {
  state = {
    persons: [
      { id: "asfa1", name: "Mike", age: 28 },
      { id: "vasdf1", name: "Eleanor", age: 29 },
      { id: "asdf11", name: "Demogorgan", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });


    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {


    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {

    const btnClass = [classes.Button]
    let persons = null;
    if (this.state.showPersons) {
      persons =
        <Persons
          persons={this.state.persons}
          click={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
    }

    // Added for implemeting CSS Modules
    btnClass.push(classes.Red)



    return (

      //   implementation of CSS Modules usind array stored in const btnClass
      <div className={classes.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          click={this.togglePersonsHandler} />
        {persons}
      </div>
    );

  }
}

export default Radium(App);
