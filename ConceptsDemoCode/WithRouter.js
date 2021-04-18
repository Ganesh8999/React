// The withRouter() higher-order function will inject the history object as a prop of the component.
//  This object provides push() and replace() methods to avoid the usage of context.

import { withRouter } from "react-router-dom";

const Button = ({ history }) => {
  <button
    type="button"
    onClick={() => history.push("/new_location")}
  >{`Click me`}</button>;
};
