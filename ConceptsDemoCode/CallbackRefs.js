class MyComponent extends React.Component {
  renderRow = (index) => {
    // this won't work ref will get attached to the datatable rather than the MyComponent
    // return <input ref={'input-' + index}/>;

    // this would work because callback refs are awesome
    return <input ref={(input) => (this["input-" + index] = input)} />;
  };

  render() {
    return <Datatable data={this.props.data} renderRow={this.renderRow} />;
  }
}
