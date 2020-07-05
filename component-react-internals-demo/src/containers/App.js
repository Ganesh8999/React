import React, { Component } from "react";
import ErrorBoundry from "../ErrorBoundry/ErrorBoundry"

// import from "./App.css"; // removed for implementation of CSS Modules
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";
// removed for implementation of Styled components
//import Radium, { StyleRoot } from "radium";
import Radium from "radium";

// removed after implemeting CSS Modules
// import styled from "styled-components";
// const StyledButton = styled.button`
//   background-color: ${(props) => (props.alt ? "red" : "green")};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${(props) => (props.alt ? "salmon" : "lightgreen3")};
//     color: black;
//   }
// `;

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

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
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

    const btnClass = [classes.Button]

    //  removed for implementation of CSS Modules
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black",
    //   },
    // };



    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <ErrorBoundry key={person.id}>
                <Person
                  click={() => this.deletePersonHandler(index)}
                  name={person.name}
                  age={person.age}

                  changed={(event) => this.nameChangedHandler(event, person.id)}
                />
              </ErrorBoundry>
            );
          })}
        </div>
      );

      // style.backgroundColor = "red";

      // style[":hover"] = {
      //   backgroundColor: "orange",
      //   color: "black",
      // };

      // style.backgroundColor = "red";

      // style[":hover"] = {
      //   backgroundColor: "orange",
      //   color: "black",
      // };
    }

    //  let colorClasses = ["red", "bold"].join(" ");



    // Added for implemeting CSS Modules
    btnClass.push(classes.Red)

    const colorClasses = [];
    if (this.state.persons.length <= 2) {
      colorClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      colorClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      //   <div className="App">
      //     <h1>Hi, I'm a React App</h1>
      //     <p className={colorClasses.join(" ")}>This is really working!</p>
      //     <button style={style} onClick={this.togglePersonsHandler}>
      //       Toggle Persons
      //     </button>
      //     {persons}
      //   </div>
      // </StyleRoot>

      // removed below lines for implementation of CSS Modules
      // <div className="App">
      //   <h1>Hi, I'm a React App</h1>
      //   <p className={colorClasses.join(" ")}>This is really working!</p>
      //   <StyledButton
      //     alt={this.state.showPersons}
      //     onClick={this.togglePersonsHandler}
      //   >
      //     Toggle Persons
      //   </StyledButton>
      //   {persons}
      // </div>

      // This is for implementation of CSS Modules
      // removed below lines for implementation of CSS Modules array feature
      // <div className={classes.App}>
      //   <h1>Hi, I'm a React App</h1>
      //   <p className={colorClasses.join(" ")}>This is really working!</p>
      //   <button
      //     className={classes.Button}
      //     alt={this.state.showPersons}
      //     onClick={this.togglePersonsHandler}
      //   >
      //     Toggle Persons
      //   </button>
      //   {persons}
      // </div>

      //   implementation of CSS Modules usind array stored in const btnClass
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={colorClasses.join(" ")}>This is really working!</p>
        <button
          className={btnClass.join(" ")}
          alt={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
      </button>
        {persons}
      </div>
    );

    // This is StyleRoot implementation
    // return (
    //   <StyleRoot>
    //     <div className="App">
    //       <h1>Hi, I'm a React App</h1>
    //       <p className={colorClasses.join(" ")}>This is really working!</p>
    //       <button style={style} onClick={this.togglePersonsHandler}>
    //         Toggle Persons
    //       </button>
    //       {persons}
    //     </div>
    //   </StyleRoot>
    // );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default Radium(App);
