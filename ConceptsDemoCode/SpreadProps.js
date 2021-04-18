// Destrucring with ...rest

const Data = () => <Result flag={true} className={"result"} />;

const Data = ({ flag, ...domProps }) => <Result {...domProps} />;


// by spreading
const Data = () => (<Result flag = {true} domProps= {{className="result"}}/>);

const Data = (props) => (<Result {...props.domProps}/>)