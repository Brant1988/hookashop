import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/products";

const Sale = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts({ isOnSale: true }));
  }, [dispatch]);

  const { products: saleProducts, isLoading } = useSelector(
    (state) => state.products
  );

  console.log("hookahs", saleProducts);
  return (
    <div className="wrapper">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="productsList">
          {saleProducts.map((product) => {
            return (
              <div className="product" key={product.id}>
                <img
                  width={200}
                  height={200}
                  src={"http://localhost:5000/" + product.img}
                  alt={product.name}
                ></img>
                <h1>{product.name}</h1>
                <h4>{product.oldPrice}</h4>
                <h3>{product.price}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sale;
