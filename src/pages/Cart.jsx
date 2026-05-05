import { useContext, useMemo } from "react";
import "./Styles/Cart.css";
import { StoreContext } from "../context/StoreContext";
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

  const itemsInCart = useMemo(
    () => food_list.filter((item) => cartItems[item._id] > 0),
    [food_list, cartItems],
  );

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

        <hr />

        {itemsInCart.length === 0 && (
          <p className="empty-cart">Your cart is empty</p>
        )}

        {itemsInCart.map((item) => {
          const quantity = cartItems[item._id];

          return (
            <div key={item._id} className="cart-item-wrapper">
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt={item.name} />
                <p className="item-name">{item.name}</p>
                <p>₹{item.price}</p>

                <div className="quantity-controls">
                  <button
                    className="qty-btn"
                    onClick={() => removeFromCart(item._id)}
                    disabled={quantity <= 0}
                  >
                    -
                  </button>

                  <span className="qty-count">{quantity}</span>

                  <button
                    className="qty-btn"
                    onClick={() => addToCart(item._id)}
                  >
                    +
                  </button>
                </div>

                <p className="item-total">₹{item.price * quantity}</p>
              </div>

              <hr />
            </div>
          );
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-box">
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p>
            </div>

            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{deliveryFee}</p>
            </div>

            <div className="cart-total-details total">
              <b>Total</b>
              <b>₹{total}</b>
            </div>
          </div>

          <button
            className="checkout-btn"
            disabled={subtotal === 0}
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
