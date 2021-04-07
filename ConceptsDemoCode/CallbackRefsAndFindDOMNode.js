// legacy approch of using findDOMNode()

class MyComponent extends React.Component {
  componentDidUpdate() {
    findDOMNode(this).scrollIntoView();
  }

  render() {
    return <div />;
  }
}

// ref={'textInput'},  legacy also bcz they are removed in the React v16

// callback refs approach

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.node = createRef();
  }

  componentDidUpdate() {
    this.node.current.scrollIntoView();
  }

  render() {
    return <div ref={this.node} />;
  }
}
