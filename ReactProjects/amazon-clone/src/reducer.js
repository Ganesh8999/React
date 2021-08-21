export const initialState = {
  basket: [],
  user: null,
};

//selector
export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      console.log("hello REMOVE_FROM_BASKET");
      // find index
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      console.log("index " + index);

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "can't remove this product it's not available in the cart"
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
