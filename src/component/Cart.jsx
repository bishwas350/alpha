import React from "react";

const Cart = () => {
  return (
    <>
     <div className=" justify-center flex ">
     <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your Cart</h2>
          <div className="cart-item">
            <img src="Image path" alt="Image title" />
            <div className="cart-item-details">
              <h3>Image Title</h3>
              <p>Price : $200</p>
              <div>
                <input type="number" min="1" className="outline-1" />
                <button>Update</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <p>Total :$200</p>
            <button className="back-button">Back to Shopping</button>
          </div>
        </div>
      </div>
     </div>
    </>
  );
};

export default Cart;
