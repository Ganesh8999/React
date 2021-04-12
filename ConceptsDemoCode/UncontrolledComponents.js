class userProfile extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  handleSubmit(event) {
    alert("the name was submitted ! " + this.input.current.value);
    event.preventDefault();
  }

  render() {
    return (
      // In most cases, it's recommend to use controlled components to implement forms.

      <form onSubmit={this.handleSubmit}>
        <label>
          {"Name : "}
          <input type="text" ref={this.input} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
