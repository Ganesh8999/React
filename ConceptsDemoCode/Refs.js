// create refs 1st way
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  render() {
    return <div ref={this.myRef} />;
  }
}

// create refs by using refs callback

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.textSearch = null;
    this.state = { term: "" };

    this.myRef = (e) => {
      this.textSearch = e;
    };
  }

  onInputChange(event) {
    this.setState({ term: this.textSearch.value });
  }

  render() {
    return <input ref={this.myRef} onChange={this.onInputChange.bind(this)} />;
  }
}
