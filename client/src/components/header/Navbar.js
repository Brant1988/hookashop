import React from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { fetchProducts } from "../../reducers/products";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="categories_nav">
      <NavLink
        to="/hookahs"
        onClick={() => dispatch(fetchProducts({ categoryId: 1 }))}
      >
        Кальяны
      </NavLink>

      <NavLink to="/tobacco">Табак</NavLink>

      <NavLink to="/charcoal">Уголь</NavLink>

      <NavLink to="/accessories">Аксессуары</NavLink>

      <NavLink to="/PODs">PODы</NavLink>

      <NavLink to="/liquids">Жидкости</NavLink>

      <NavLink to="/bongs">Бонги</NavLink>
    </nav>
  );
};

export default Navbar;
