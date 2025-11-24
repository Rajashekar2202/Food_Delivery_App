import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    cartItems,
    food_list,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal === 0 ? 0 : 2;
  const total = subtotal + deliveryFee;

  const itemsInCart = food_list.filter((item) => cartItems[item._id] > 0);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>
        <br />
        <hr />

        {itemsInCart.length === 0 && <p>Your cart is empty</p>}

        {itemsInCart.map((item) => (
          <div key={item._id}>
            <div className="cart-items-title cart-items-item">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>₹{item.price}</p>

              <div className="quantity-controls">
                <button
                  className="qty-btn"
                  onClick={() => removeFromCart(item._id)}
                  disabled={cartItems[item._id] <= 0}
                >
                  -
                </button>
                <span className="qty-count">{cartItems[item._id]}</span>
                <button className="qty-btn" onClick={() => addToCart(item._id)}>
                  +
                </button>
              </div>

              <p>₹{item.price * cartItems[item._id]}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{total}</b>
            </div>
          </div>

          <button disabled={subtotal === 0} onClick={() => navigate("/order")}>
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
