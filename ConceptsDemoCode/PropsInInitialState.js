// This component won't display the updated input value:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      inputValue: this.props.inputValue,
    };
  }

  render() {
    return <div>{this.props.inputValue}</div>;
  }
}

// If we use props inside render method will update the value:

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      record: [],
    };
  }

  render() {
    return <div>{this.props.inputValue}</div>;
  }
}
