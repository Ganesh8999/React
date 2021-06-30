const items = ["a", "b", "c"];

const List = () => {
  <ul>
    {items.map((item) => (
      <li key={item.id}>{item}</li>
    ))}
  </ul>;
};

const todoItems = todos.map((todo, index) => <li key={index}>{todo.text}</li>);
