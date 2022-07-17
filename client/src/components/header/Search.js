import React from "react";
import logo from "./logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Search = () => {
  const { cartTotalAmount } = useSelector((state) => state.cart);

  return (
    <div className="search">
      <div className="wrapper">
        <NavLink to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </NavLink>
        <div className="search-box">
          <input
            name="query"
            placeholder="Поиск товаров"
            type="text"
            autoComplete="off"
          ></input>
          <i className="fa fa-search"></i>
        </div>
        <div className="cart">
          <NavLink to="/cart">
            <i className="fa fa-shopping-cart" id="123"></i>
            <span className="bag-quantity">
              <span>{cartTotalAmount}</span>
            </span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Search;
