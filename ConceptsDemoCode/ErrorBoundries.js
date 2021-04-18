class ErrorBoundry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    //can log error by using error reporting service
    logMyErrorToMyService(error, info);
  }

  static getDerivedStateFromError(error) {
    //change state so that we can use for it updating falback html page
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>{`Something went wrong try again later`}</h1>;
    }
    return this.props.children;
  }
}

/* Note :- React v15 errors are handled by unstable_handleError() method
        but in v16 method renamed to componentDidCatch() */

//we can use it as a normal Component

<ErrorBoundry>
  <MyComponent />
</ErrorBoundry>;
