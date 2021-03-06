import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../ContactData/ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";


class ContactData extends Component {

    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    }


    orderHandler = (event) => {

        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Ganesh Singh',
                address: {
                    street: 'Banglore',
                    zipCode: '560045',
                    country: 'India'
                },
                email: 'singhganesh57122@gmail.com'
            },
            deliveryMethod: 'prime'
        }
        axios.post('https://react-burger-project-2231f.firebaseio.com/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }


    render() {

        let form = (<form>
            <input className={classes.Input} type="text" name="name" placeholder="Name" />
            <input className={classes.Input} type="email" name="email" placeholder="Email" />
            <input className={classes.Input} type="text" name="street" placeholder="Street" />
            <input className={classes.Input} type="text" name="postal" placeholder="postalCode" />
            <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
        </form>);

        if (this.state.loading) {
            form = <Spinner />;
        }

        return (

            <div className={classes.ContactData}>

                <h4>enter your contact data</h4>
                {form}
            </div>
        )
    }

}


export default ContactData;