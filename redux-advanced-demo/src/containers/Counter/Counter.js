import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreators from "../../store/actions/index";

class Counter extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 3" clicked={this.props.onAdditionCounter} />
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
        onIncrementCounter: () => dispatch(actionCreators.increment()),
        onDecrementCounter: () => dispatch(actionCreators.decrement()),
        onAdditionCounter: () => dispatch(actionCreators.addition(3)),
        onSubtractionCounter: () => dispatch(actionCreators.subtraction(3)),

        onStoreResult: (result) => dispatch(actionCreators.storeResult(result)),
        onDeleteResult: (id) => dispatch(actionCreators.deleteResult(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);