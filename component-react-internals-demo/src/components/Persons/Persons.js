import React from "react"
import Person from "../Persons/Persons.js"


const persons = props => {

  return props.persons.map((person, index) => {

    return (<Person
      click={() => props.click(index)}
      name={person.name}
      age={person.age}
      id={person.id}
      changed={event => props.changed(event, person.id)}
    />
    );
  });
};

export default persons;