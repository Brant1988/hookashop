import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { logOut } from "../../reducers/auth";

const Head = () => {
  const dispatch = useDispatch();

  const { isAuth } = useSelector((state) => state.auth);

  return (
    <div className="head">
      <div className="wrapper">
        <nav className="info">
          <li>
            <NavLink to="/sale">Акции</NavLink>
          </li>
          <li>
            <NavLink to="/shipment">Доставка и оплата</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Контакты</NavLink>
          </li>
        </nav>
        <div className="socials">
          <i className="fa-brands fa-instagram-square"></i>
          <i className="fa-brands fa-vk"></i>
        </div>
        <div className="phone">
          <i className="fa fa-phone"></i>
          <label>+7-931-22-33-44-2</label>
        </div>
        <div className="login">
          {isAuth ? (
            <>
              <button>Личный кабинет</button>
              <i className="fa-solid fa-user"></i>
              <button onClick={() => dispatch(logOut())}>Выйти</button>
              <i className="fa-solid fa-arrow-right-from-bracket"></i>
            </>
          ) : (
            <NavLink to="/auth">
              <button>Войти</button>
              <i className="fa-solid fa-arrow-right-to-bracket"></i>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Head;
