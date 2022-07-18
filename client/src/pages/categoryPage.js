import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../reducers/cart";
import { fetchProducts } from "../reducers/products";

const CategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading } = useSelector((state) => state.products);

  return (
    <div className="shopPage">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="productsList">
          {products.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img
                  width={200}
                  height={200}
                  src={"http://localhost:5000/" + product.img}
                  alt={product.name}
                  onClick={() => {
                    dispatch(fetchProducts({ id: product.id }));
                    navigate(`../${product.name}`.toLocaleLowerCase());
                  }}
                ></img>
                <div className="product_info">
                  <h3>{product.name}</h3>
                  <h4>{product.oldPrice}</h4>
                  <h3>{product.price}</h3>
                </div>
                <button onClick={() => dispatch(addToCart(product))}>
                  В корзину
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
