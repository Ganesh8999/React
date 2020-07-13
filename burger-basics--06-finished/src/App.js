import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {

  // Just implemented for checking the how eject() works in interceptors
  // state = {
  //   show: true
  // }


  // componentDidMount() {
  //   setTimeout(() => {
  //     this.setState({ show: false });
  //   }, 5000)
  // }
  render() {
    return (
      <div>
        <Layout>
          {/* {this.state.show ? <BurgerBuilder /> : null} */}
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
