import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/products";

const Tobacco = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const { data: tobacco } = useSelector((state) => state.products);

  console.log("hookahs", tobacco);
  return (
    <div className="wrapper">
      {/* {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="productsList">
          {tobacco.rows.map((tob) => {
            return (
              <div className="product" key={tob.id}>
                <img src={"http://localhost:5000/" + tob.img}></img>
                {tob.name}
              </div>
            );
          })}
        </div>
      )} */}
    </div>
  );
};

export default Tobacco;
