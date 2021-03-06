import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import classes from "../ContactData/ContactData.css";
import axios from "../../../axios-orders";
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";


class ContactData extends Component {

    state = {

        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Your Name"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            street:
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Street"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            zipCode:
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "Zip Code"
                },
                value: '',
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false

            },
            country:
            {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: "country"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            email:
            {
                elementType: 'input',
                elementConfig: {
                    type: 'email',
                    placeholder: "Email"
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false

            },
            deliveryMethod:
            {
                elementType: 'select',
                elementConfig: {
                    options: [
                        { value: "prime", displayValue: 'Prime' },
                        { value: "standard", displayValue: 'Standard' },
                    ]
                },
                value: '',
                valid: true,
                validation: {}

            }
        },
        isFormValid: false,

        loading: false
    }


    orderHandler = (event) => {

        event.preventDefault();
        console.log(this.props.ingredients);

        const formData = {};

        for (let formElementIdentifier in this.state.orderForm) {

            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            orderData: formData

        }

        // console.log("formData" + formData);
        axios.post('https://react-burger-project-2231f.firebaseio.com/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }


    checkValidity(value, rules) {

        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid
        }
        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid
        }
        if (rules.maxLength) {
            isValid = value.length >= rules.maxLength && isValid
        }

        return isValid;
    }


    inputChangedHandler = (event, inputIdentifier) => {
        //  console.log(event.target.value);
        const updatedOrderForm = {
            ...this.state.orderForm
        }

        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        }

        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        //   console.log(updatedFormElement);

        let isFormValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            isFormValid = updatedOrderForm[inputIdentifier].valid && isFormValid;
        }


        this.setState({ orderForm: updatedOrderForm, isFormValid: isFormValid });
    }



    render() {


        const formElementArray = [];

        for (let key in this.state.orderForm) {

            formElementArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (<form onSubmit={this.orderHandler}>
            {formElementArray.map(formElement => (

                <Input

                    key={formElement.id}
                    elementType={formElement.config.elementType}
                    elementConfig={formElement.config.elementConfig}
                    value={formElement.config.value}
                    invalid={!formElement.config.valid}
                    changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    touched={formElement.config.touched}
                    shouldValidate={formElement.config.validation}
                />
            ))}
            <Button btnType="Success" disabled={!this.state.isFormValid}>Order</Button>
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