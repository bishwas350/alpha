import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../future/shopCart/prodectSlice";
import Container from "./Container";
import { addToCart } from "../future/shopCart/cartSlice";

const Product = () => {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  if (status === "loading")
    return (
      <div className=" flex text-center justify-center ">
        <Container>
          <div className="mt-28">
            <span className="loading loading-spinner loading-xl text-black"></span>
          </div>
        </Container>
      </div>
    );
  if (status === "failed")
    return (
      <div className="justify-center text-2xl">
        <div role="alert" className="alert alert-error items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Error! Task failed successfully.</span>
        </div>
      </div>
    );
  return (
    <>
      <Navbar />
      <div className="product-list bg-white">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </h2>
            <p>৳{product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))}>Add To Cart</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
