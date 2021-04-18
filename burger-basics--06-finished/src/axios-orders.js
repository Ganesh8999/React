import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-project-2231f.firebaseio.com/",
});

export default instance;
