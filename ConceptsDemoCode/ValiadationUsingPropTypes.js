import React from 'react';
import PropTypes from React.propTypes;

// This article is having detailed explanation of PropTypes
// https://blog.logrocket.com/validating-react-component-props-with-prop-types-ef14b29963fc/
class Employee {
    static propTypes = {

        name : PropTypes.string.isRequired,
        number : PropTypes.number.isRequired,
        bikes : PropTypes.array.isRequired,
        address : PropTypes.shape({
            city : PropTypes.string.isRequired,
            // more fields or properties

        })

        }
    }

