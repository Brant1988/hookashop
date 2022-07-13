import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../reducers/products";

const Hookahs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(1));
  }, [dispatch]);

  const { data: hookahs, isLoading } = useSelector((state) => state.products);

  console.log("hookahs", hookahs);
  return (
    <div className="wrapper">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <div className="productsList">
          {hookahs.rows.map((hook) => {
            return (
              <div className="product" key={hook.id}>
                <img
                  width={250}
                  height={250}
                  src={"http://localhost:5000/" + hook.img}
                ></img>
                {hook.name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Hookahs;
