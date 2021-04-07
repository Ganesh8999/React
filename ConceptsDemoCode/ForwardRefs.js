const ButtonElement = React.forwardRef((props, ref) => (
  <button ref={ref} className="CustomButton">
    {props.children}
  </button>
));

// creating the ref to the DOM button
const ref = React.createRef();
<ButtonElement ref={ref}>{"Forward ref"}</ButtonElement>;
