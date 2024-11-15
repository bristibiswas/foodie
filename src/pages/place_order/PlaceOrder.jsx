import React,{useContext} from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className="placeorder">
      <div className="placeorder_left">
        <p className="placeorder_left_title">Delivery Information</p>
        <div className="multi_fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email adress"/><input type="text" placeholder="Street"/>
        <div className="multi_fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi_fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone"/>
      </div>
      <div className="placeorder_right"> 
      <div className="cart_total">
            <h2>Cart total</h2>
            <div className="cart_total_details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <hr />
            <div className="cart_total_details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
            </div>
            <button>PROCEED TO PAYMENT</button>
          </div>

      </div>
    </form>
  );
};

export default PlaceOrder;
