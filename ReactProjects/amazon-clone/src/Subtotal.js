import React from "react";
import "./Subtotal.css";

function Subtotal() {
  return (
    <CurrencyFormat
      renderText={(value) => (
        <>
          <p>
            {/* Part of the homework */}
            Subtotal (0 items): <strong>0</strong>
          </p>
          <small className="subtotal__gift">
            <input type="checkbox" /> This order contains a gift
          </small>
        </>
      )}
      decimalScale={2}
      value={0} // Part of the homework
      displayType={"text"}
      thousandSeparator={true}
      prefix={"$"}
    />
  );
}

export default Subtotal;
