import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../future/shopCart/cartSlice";
const Cart = () => {
  const {
    items: cartItems,
    tempItems,
    totalPrice,
  } = useSelector((state) => state.cart);
  useSelector((state) => console.log(state));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };
  return (
    <>
      <div className=" justify-center flex ">
        <div className="cart-page-container">
          <div className="cart-container">
            <h2>Your Cart</h2>
            {cartItems.map((item) => (
              <div className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>Price : ৳{item.price}</p>
                  <div>
                    <input type="number" min="1" className="outline-1" />
                    <button>Update</button>
                    <button onClick={() => handleRemoveItem(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="cart-total">
              <p>Total :৳{totalPrice}</p>
              <button className="back-button" onClick={() => navigate("/")}>
                Back to Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
