import React, { useEffect, useRef } from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log("Cockpit.js useEffect() called!!");

    // example for cleanup work with useEffect
    // const timer = setTimeout(() => {

    // removed setTimeout for implementing useRef()
    // setTimeout(() => {

    //   alert('person changed!!');

    // }, 1000);

    toggleBtnRef.current.click();


    return () => {

      // part of  example for cleanup work with useEffect
      //  clearTimeout(timer);
      console.log("Cockpit.js cleanup work in useEffect");

    }

  }, []) // [props.persons] this added because whenever person changed then we want useEffect behaviour 

  // if we write just empty array [] then useEffect will only run first time because their is no any dependency to run useEffect

  // we can use multiple useEffect 



  useEffect(() => {
    console.log("Cockpit.js useEffect(2) called!!");


    return () => {
      console.log("Cockpit.js cleanup work in useEffect 2");

    }

  })

  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.clicked}>Toggle Persons</button>
    </div>
  );
};

export default React.memo(cockpit);