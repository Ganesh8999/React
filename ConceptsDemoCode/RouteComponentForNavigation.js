import { Route } from "react-router-dom";

const Button = ({ history }) => {
  <button
    type="button"
    onClick={() => history.push("/new_location")}
  >{`Click me`}</button>;
};
