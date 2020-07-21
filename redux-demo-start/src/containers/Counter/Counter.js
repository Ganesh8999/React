import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 3" clicked={this.props.onAddtionCounter} />
                <CounterControl label="Subtract 3" clicked={this.props.onSubtractionCounter} />
                <CounterControl label="Store Result" clicked={this.props.onStoreResult} />
                {/* <CounterControl label="Delete Result" clicked={this.props.onDeleteResult} /> */}

                <button onClick={this.props.onStoreResult} >Store Result</button>


                <ul>
                    {
                        this.props.storedResults.map(storedResult => (

                            <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                        ))
                    }

                </ul>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults: state.result
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddtionCounter: () => dispatch({ type: "ADDITION", val: 3 }),
        onSubtractionCounter: () => dispatch({ type: "SUBTRACTION", val: 3 }),
        onStoreResult: () => dispatch({ type: "STORE_RESULT" }),
        onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElementId: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);