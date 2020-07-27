import * as actionTypes from "./actionTypes";
import axios from "../../axios-orders";


export const purchaseBurgerSuccess = (id, orderData) => {

    return {

        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    }
}

export const purchaseBurgerFailed = (error) => {

    return {

        type: actionTypes.PURCHASE_BURGER_FAILED,
        error: error
    }
}

export const purchaseBurgerStart = () => {

    return {
        type: actionTypes.PURCHASE_BURGER_START
    }
}

export const purchaseBurger = (orderData) => {

    return dispatch => {

        dispatch(purchaseBurgerStart());

        axios.post('https://react-burger-project-2231f.firebaseio.com/orders.json', orderData)
            .then(response => {

                dispatch(purchaseBurgerSuccess(response.data, orderData))

            })
            .catch(error => {

                purchaseBurgerFailed(error);
            });
    }

}

export const purchaseInit = () => {

    return {
        type: actionTypes.PURCHASE_INIT
    }
}



export const fetchOrderSuccess = (orders) => {

    //  console.log(orders);


    return {
        type: actionTypes.FETCH_ORDERS_SUCCESS,
        orders: orders,
        loading: false
    }
}

export const fetchOrdersFail = (error) => {
    return {

        type: actionTypes.FETCH_ORDERS_FAILED,
        error: error
    }
}


export const fetchOrdersStart = () => {
    return {
        type: actionTypes.FETCH_ORDERS_START
    }
}


export const fetchOrders = () => {



    return dispatch => {

        dispatch(fetchOrdersStart());

        axios.get('/orders.json').then(res => {

            const fetchedOrders = [];
            console.log(res.data);
            for (let key in res.data) {

                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }

            console.log(fetchedOrders);


            dispatch(fetchOrderSuccess(fetchedOrders));

        }).catch(error => {


            dispatch(fetchOrdersFail(error));
        })

    }

}