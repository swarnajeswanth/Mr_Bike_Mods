import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./cartpage.css";

const CartContainer = () => {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Yamaha R15 V3 Headlight Assembly",
      type: "LED | Dual-Beam | Black",
      image:
        "data:image/jpeg;base64,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",
      status: "In Stock",
      price: 7800,
      quantity: 1,
    },
    {
      id: 2,
      name: "KTM RC Modified Exhaust",
      type: "Stainless Steel | Loud",
      image:
        "data:image/jpeg;base64,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",
      status: "Out Of Stock",
      price: 4800,
      quantity: 1,
    },
  ]);

  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState(0);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: qty } : item))
    );
  };

  const applyPromo = () => {
    if (promoCode.toLowerCase() === "modz10") {
      setPromoDiscount(500);
    } else {
      setPromoDiscount(0);
      alert("Invalid promo code");
    }
  };

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const totalDiscount = 1500;
  const finalAmount = totalPrice - totalDiscount - promoDiscount;

  return (
    <>
      <div className="cart-back-button">
        <button onClick={() => navigate(-1)}>← Back</button>
      </div>

      <div className="cart-wrapper">
        <div className="cart-left">
          <div className="cart-header">Cart (Bike Parts)</div>
          <div className="cart-delivery">
            Deliver to: <strong>Nellore - 524003</strong>{" "}
            <button>Change</button>
          </div>

          {cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-details">
                <h3>{item.name}</h3>
                <p>{item.type}</p>
                <p
                  className={`status ${
                    item.status === "Out Of Stock" ? "out" : "in"
                  }`}
                >
                  {item.status}
                </p>
                <div className="quantity-controls">
                  <button onClick={() => updateQty(item.id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQty(item.id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <div className="cart-actions">
                  <button>Save for Later</button>
                  <button>Remove</button>
                </div>
              </div>
              <div className="cart-price">
                ₹{(item.price * item.quantity).toLocaleString()}
              </div>
            </div>
          ))}

          <div className="place-order-btn">PLACE ORDER</div>
        </div>

        <div className="cart-right">
          <h4>PRICE DETAILS</h4>

          <div className="promo-section">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={applyPromo}>Apply</button>
          </div>

          <div className="price-row">
            <span>Price ({cartItems.length} items)</span>
            <span>₹{totalPrice.toLocaleString()}</span>
          </div>
          <div className="price-row">
            <span>Discount</span>
            <span className="discount">-₹{totalDiscount}</span>
          </div>
          <div className="price-row">
            <span>Promo</span>
            <span className="discount">-₹{promoDiscount}</span>
          </div>
          <div className="price-row total">
            <span>Total Amount</span>
            <span>₹{finalAmount.toLocaleString()}</span>
          </div>
          <div className="save-message">
            You will save ₹{(totalDiscount + promoDiscount).toLocaleString()} on
            this order
          </div>
          <p className="safe-msg">
            🛡️ Safe and Secure Payments. Easy returns. 100% Genuine bike parts.
          </p>
        </div>
      </div>
    </>
  );
};

export default CartContainer;
