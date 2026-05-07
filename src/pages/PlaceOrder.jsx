import { useContext, useMemo } from "react";
import "./Styles/PlaceOrder.css";

import { StoreContext } from "../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  /* CART TOTALS */
  const subtotal = getTotalCartAmount();

  const deliveryFee = subtotal > 0 ? 2 : 0;

  const total = subtotal + deliveryFee;

  /* FORM SUBMIT */
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Proceed to payment");
  };

  /* TOTAL DETAILS */
  const orderSummary = useMemo(
    () => [
      {
        label: "Subtotal",
        value: subtotal,
      },
      {
        label: "Delivery Fee",
        value: deliveryFee,
      },
    ],
    [subtotal, deliveryFee],
  );

  return (
    <form className="place-order" onSubmit={handleSubmit}>
      {/* LEFT SECTION */}
      <section className="place-order-left">
        <h2 className="title">Delivery Information</h2>

        {/* NAME */}
        <div className="multi-fields">
          <input type="text" placeholder="First Name" required />

          <input type="text" placeholder="Last Name" required />
        </div>

        {/* EMAIL */}
        <input type="email" placeholder="Email Address" required />

        {/* STREET */}
        <input type="text" placeholder="Street" required />

        {/* CITY & STATE */}
        <div className="multi-fields">
          <input type="text" placeholder="City" required />

          <input type="text" placeholder="State" required />
        </div>

        {/* PIN & COUNTRY */}
        <div className="multi-fields">
          <input type="text" placeholder="Pin Code" required />

          <input type="text" placeholder="Country" required />
        </div>

        {/* PHONE */}
        <input type="tel" placeholder="Phone Number" required />
      </section>

      {/* RIGHT SECTION */}
      <aside className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>

          <div className="cart-total-box">
            {orderSummary.map((item) => (
              <div key={item.label} className="cart-total-details">
                <p>{item.label}</p>

                <p>₹{item.value}</p>
              </div>
            ))}

            <hr />

            <div className="cart-total-details total">
              <b>Total</b>

              <b>₹{total}</b>
            </div>
          </div>

          <button
            type="submit"
            className="payment-btn"
            disabled={subtotal === 0}
          >
            Proceed to Payment
          </button>
        </div>
      </aside>
    </form>
  );
};

export default PlaceOrder;
