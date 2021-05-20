import React from "react";
import "../scss/App.scss";
import "../scss/Modal.scss";
import { priceHelper } from "../helpers/price_helper";

const CartModal = (props) => {
  const { show, items } = props;
  return (
    <div className={show ? "modal-show" : "modal-hide"}>
      <div className="modal_container">
        {items.map((item, i) => (
          <>
            <div className="item_container" key={i}>
              <div>
                <p>
                  {item.name} ({item.quantity})
                </p>
              </div>
              <div>
                <p className="detail_price">
                  {priceHelper(item.price * item.quantity)}
                </p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CartModal;
