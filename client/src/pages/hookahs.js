import Slider from "@mui/material/Slider";
import Input from "@mui/material/Input";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, fetchBrands } from "../reducers/products";
import { addToCart } from "../reducers/cart";
import "./pages.css";

const Hookahs = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [fromPrice, setfromPrice] = useState(0);
  const [toPrice, setToPrice] = useState(0);

  const {
    products: hookahs,
    brands,
    isLoading,
  } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts({ categoryId: 1 }));
  }, [dispatch]);

  const [hookahBrandIds, setHookahBrandIds] = useState([]);

  useEffect(() => {
    setHookahBrandIds(hookahs.map((product) => product.brandId));
  }, [hookahs]);

  useEffect(() => {
    dispatch(fetchBrands([...hookahBrandIds]));
  }, [dispatch, hookahBrandIds]);

  const handleBlur = () => {
    if (fromPrice || toPrice < 0) {
      setfromPrice(0);
      setToPrice(0);
    } else if (fromPrice || toPrice > 20000) {
      setfromPrice(20000);
      setToPrice(20000);
    }
  };

  console.log(hookahBrandIds);
  return (
    <div className="shopPage">
      {isLoading ? (
        <span>LOADING</span>
      ) : (
        <>
          <div className="fillters">
            <List component="nav">
              {brands.map((brand) => {
                return (
                  <ListItemButton
                    onClick={() => {
                      dispatch(fetchProducts({ brandId: brand.id }));
                      navigate(`../brand/${brand.name}`.toLocaleLowerCase());
                    }}
                  >
                    <ListItemText primary={brand.name} />
                  </ListItemButton>
                );
              })}
            </List>
            <div className="price_filter">
              <Slider
                sx={{
                  color: "yellow",
                }}
                className="slider"
                step={500}
                min={0}
                max={20000}
                value={fromPrice}
                onChange={(event, newValue) => {
                  setfromPrice(newValue);
                }}
                aria-labelledby="input-slider"
              />
              <Input
                value={fromPrice}
                size="small"
                onChange={(event) => {
                  setfromPrice(event.target.value);
                }}
                onBlur={handleBlur}
                inputProps={{
                  step: 500,
                  min: 0,
                  max: 20000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              <Slider
                sx={{
                  color: "yellow",
                }}
                className="slider"
                step={500}
                min={0}
                max={20000}
                value={toPrice}
                onChange={(event, newValue) => {
                  setToPrice(newValue);
                }}
                aria-labelledby="input-slider"
              />
              <Input
                value={toPrice}
                size="small"
                onChange={(event) => {
                  setToPrice(event.target.value);
                }}
                onBlur={handleBlur}
                inputProps={{
                  step: 500,
                  min: 0,
                  max: 20000,
                  type: "number",
                  "aria-labelledby": "input-slider",
                }}
              />
              <button
                onClick={() =>
                  dispatch(fetchProducts({ price: [fromPrice, toPrice] }))
                }
              >
                Фильтр по цене
              </button>
            </div>
          </div>
          <div className="productsList">
            {hookahs.map((hookah) => {
              return (
                <div className="product" key={hookah.id}>
                  <img
                    width={200}
                    height={200}
                    src={"http://localhost:5000/" + hookah.img}
                    alt={hookah.name}
                    onClick={() => {
                      dispatch(fetchProducts({ id: hookah.id }));
                      navigate(`../${hookah.name}`.toLocaleLowerCase());
                    }}
                  ></img>
                  <div className="product_info">
                    <h3>{hookah.name}</h3>
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
