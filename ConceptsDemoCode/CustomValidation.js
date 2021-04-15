/* Basic custom validators
The custom validation function takes three arguments:

props, an object containing all the props passed to the component
propName, the name of the prop to be validated
componentName, the name of the component
If the validation fails, it should return an Error object. 
The error should not be thrown. Also, console.warn should not be used inside the custom validation function. */

const isEmail = function (props, propName, componentName) {
  const regex = /^((([^<>()[]\.,;:s@"]+(.[^<>()[]\.,;:s@"]+)*)|(".+"))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,})))?$/;

  if (!regex.test(props[propName])) {
    return new Error(
      `Invalid prop for ${propName} passed to ${componentName}. Expected a valid email `
    );
  }

  Component.propTypes = {
    email: isEmail,
    // more properties related to component
  };
};

// Alternattive way to use
// PropTypes.oneOfType

Component.propTypes = {
  email: PropTypes.oneOfType([
    isEmail,
    PropTypes.shape({
      address: isEmail,
    }),
  ]),
};

// for both scenes

{
  /* <Component email="google@g.com" />
<Component email={{ address: 'google@g.com' }} /> */
}
