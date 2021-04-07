export class TriggerClickEvent extends React.Component {
  render() {
    return (
      <div onClick={this.handleClick}>
        <input ref={(input) => (this.inputElement = input)} />
      </div>
    );
  }

  handleClick = (e) => {
    console.log("you just clicked on the input tag ");
    this.inputElement.click();
  };
}
