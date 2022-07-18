import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cart";

const ProductPage = () => {
  const dispatch = useDispatch();

  const { products: tempProduct } = useSelector((state) => state.products);

  const product = tempProduct[0];

  console.log(product);
  return (
    <div className="product_page">
      <img
        width={400}
        height={400}
        src={"http://localhost:5000/" + product.img}
        alt={product.name}
      ></img>
      <div className="product_page_info">
        <h3>{product.name}</h3>
        <h4>{product.oldPrice}</h4>
        <h3>{product.price}</h3>
        <button onClick={() => dispatch(addToCart(product))}>В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
