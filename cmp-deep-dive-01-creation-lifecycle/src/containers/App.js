import React, { Component, Fragment } from 'react';
import WithClass from "../hoc/WithClass"
import withClassHOC from "../hoc/withClassHOC"
import AuthContext from "../context/auth-context"

import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Auxi from "../hoc/Auxi"

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0
  };

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // Only older versions will support this code..
  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App.js  shouldComponentUpdate");
    return true;

  }

  componentDidUpdate() {
    console.log("App.js   componentDidUpdate");

  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {

      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1
      }
    });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
        />
      );
    }

    return (


      // first way of implementing HOC
      // <WithClass classes={classes.App}>

      //   <button onClick={() => { this.setState({ showCockpit: false }) }}> Remove Cockpit</button>
      //   {this.state.showCockpit ? (
      //     <Cockpit
      //       title={this.props.appTitle}
      //       showPersons={this.state.showPersons}
      //       personsLength={this.state.persons.length}
      //       clicked={this.togglePersonsHandler}
      //     />) : null
      //   }
      //   {persons}
      // </WithClass>


      // Another way implementing HOC
      <Auxi>

        <button onClick={() => { this.setState({ showCockpit: false }) }}> Remove Cockpit</button>
        {this.state.showCockpit ? (

          <AuthContext.Provider value={{ authenticated: this.state.authenticated, login: this.loginHandler }}>
            <Cockpit
              title={this.props.appTitle}
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
            />
          </AuthContext.Provider>
        ) : null
        }
        {persons}
      </Auxi>









      // removed for for rendering adjacent JSX  elements
      // <div className={classes.App}>
      // <Auxi>
      // <Fragment>

      //   <button onClick={() => { this.setState({ showCockpit: false }) }}> Remove Cockpit</button>
      //   {this.state.showCockpit ? (
      //     <Cockpit
      //       title={this.props.appTitle}
      //       showPersons={this.state.showPersons}
      //       personsLength={this.state.persons.length}
      //       clicked={this.togglePersonsHandler}
      //     />) : null
      //   }
      //   {persons}
      // </Fragment>
      // </Auxi>
      //   </div>

    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClassHOC(App, classes.App);
