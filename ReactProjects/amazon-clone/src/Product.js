import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  // console.log("this is the basket  ,", basket);

  const addToBasket = () => {
    // dispatch the item into to data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <div className="product">
      <div className="product__Info"></div>
      <p>{title} </p>
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <div className="product__rating">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </div>
      <img src={image} alt="" />
      {/* <img
        src="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
        alt="The lean Startup"
      /> */}

      <button onClick={addToBasket}>Add to basket</button>
    </div>
  );
}

export default Product;
