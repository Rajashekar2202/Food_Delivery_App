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

  /* TOTALS */
  const subtotal = getTotalCartAmount();

  const deliveryFee = subtotal > 0 ? 2 : 0;

  const total = subtotal + deliveryFee;

  /* FILTERED CART ITEMS */
  const itemsInCart = useMemo(() => {
    return food_list.filter((item) => cartItems[item._id]);
  }, [food_list, cartItems]);

  /* CHECKOUT */
  const handleCheckout = () => {
    if (subtotal === 0) {
      return;
    }

    navigate("/order");
  };

  return (
    <section className="cart">
      {/* CART ITEMS */}
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
        </div>

        <hr />

        {/* EMPTY CART */}
        {itemsInCart.length === 0 && (
          <p className="empty-cart">Your cart is empty</p>
        )}

        {/* ITEMS */}
        {itemsInCart.map((item) => {
          const quantity = cartItems[item._id];

          const itemTotal = item.price * quantity;

          return (
            <div key={item._id} className="cart-item-wrapper">
              <div className="cart-items-title cart-items-item">
                {/* IMAGE */}
                <img src={item.image} alt={item.name} loading="lazy" />

                {/* NAME */}
                <p className="item-name">{item.name}</p>

                {/* PRICE */}
                <p>₹{item.price}</p>

                {/* QUANTITY */}
                <div className="quantity-controls">
                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => removeFromCart(item._id)}
                    aria-label={`Decrease ${item.name}`}
                  >
                    -
                  </button>

                  <span className="qty-count">{quantity}</span>

                  <button
                    type="button"
                    className="qty-btn"
                    onClick={() => addToCart(item._id)}
                    aria-label={`Increase ${item.name}`}
                  >
                    +
                  </button>
                </div>

                {/* TOTAL */}
                <p className="item-total">₹{itemTotal}</p>
              </div>

              <hr />
            </div>
          );
        })}
      </div>

      {/* BOTTOM SECTION */}
      <div className="cart-bottom">
        {/* TOTAL */}
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
            type="button"
            className="checkout-btn"
            disabled={subtotal === 0}
            onClick={handleCheckout}
          >
            Proceed to Checkout
          </button>
        </div>

        {/* PROMO CODE */}
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>

          <div className="cart-promocode-input">
            <input type="text" placeholder="Promo code" />

            <button type="button">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
