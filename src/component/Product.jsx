import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../future/shopCart/prodectSlice";

const Product = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch= useDispatch();
  useEffect(() => {
    if(status=== 'idle'){
      dispatch(fetchProducts())
    }
  }, [status]);
  return (
    <>
      <Navbar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </h2>
            <p>৳{product.price}</p>
            <button>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
