class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
      error: null,
    };
  }

  componentDidMount() {
    fetch("https://api.example.com/emps")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            employees: result.employees,
          });
        },
        (error) => {
          this.setState({ error });
        }
      );
  }

  render() {
    const [employees, error] = this.state;

    if (error) return <div>{`error msg : ${error}`}</div>;

    return (
      <ul>
        {employees.map((employee) => {
          <li key={employee.id}>
            `${employee.name} - ${employee.experience}`
          </li>;
        })}
      </ul>
    );
  }
}
