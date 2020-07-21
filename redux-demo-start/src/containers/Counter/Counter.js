import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actionTypes from "../../store/action";

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


                <button onClick={() => this.props.onStoreResult(this.props.ctr)} >Store Result</button>


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
        ctr: state.ctrRedu.counter,
        storedResults: state.resRedu.result
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
        onAddtionCounter: () => dispatch({ type: actionTypes.ADDITION, val: 3 }),
        onSubtractionCounter: () => dispatch({ type: actionTypes.SUBTRACTION, val: 3 }),
        onStoreResult: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDeleteResult: (id) => dispatch({ type: actionTypes.DELETE_RESULT, resultElementId: id }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);