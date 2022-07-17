import ListGroup from "react-bootstrap/ListGroup";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBrands, fetchProducts } from "../reducers/products";
import { addToCart } from "../reducers/cart";
import "./pages.css";

const Hookahs = () => {
  const dispatch = useDispatch();

  const {
    products: hookahs,
    brandId,
    brands,
    isLoading,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ categoryId: 1 }));
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchBrands([...brandId]));
  }, [dispatch]);

  return (
    <div className="shopPage">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <>
          <ListGroup as="ul">
            {brands.map((brand) => {
              return (
                <ListGroup.Item
                  key={brand.id}
                  onClick={() => dispatch(fetchProducts({ brandId: brand.id }))}
                >
                  {brand.name}
                </ListGroup.Item>
              );
            })}
          </ListGroup>
          <div className="productsList">
            {hookahs.map((hookah) => {
              return (
                <div className="product" key={hookah.id}>
                  <img
                    width={200}
                    height={200}
                    src={"http://localhost:5000/" + hookah.img}
                    alt={hookah.name}
                  ></img>
                  <div className="product_info">
                    <h1>{hookah.name}</h1>

                    <h4>{hookah.oldPrice}</h4>

                    <h3>{hookah.price}</h3>
                  </div>
                  <button onClick={() => dispatch(addToCart(hookah))}>
                    В корзину
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Hookahs;
