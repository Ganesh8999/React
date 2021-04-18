const MyComponent = ({ name, address }) => {
  <div>
    <h2>{name}</h2>
    {address && <p>{address}</p>}
  </div>;
};

// for if-else use ternary operator
const MyComponent = ({ name, address }) => {
  <div>
    <h2>{name}</h2>

    {address ? <p>{address}</p> : <p>{"address is not available"}</p>}
  </div>;
};
