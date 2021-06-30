<>
  <button onClick={this.handleClick.bind(this, id)} />
  <button onClick={() => this.handleClick(id)} />

  <button onClick={this.handleClick(id)} />
</>;

this.handleClick = (id) => () => {
  console.log("hello this is the value :- ", id);
};
