import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser, registerUser } from "../reducers/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [userExist, setUserExist] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setUserData({
      ...userData,
      [event.target.name]: value,
    });
  };

  return (
    <div className="wrapper">
      <button onClick={() => setUserExist(false)}>
        Нет аккаунта? Зарегестрируйтесь
      </button>
      <button onClick={() => setUserExist(true)}>Или войдите</button>
      <div className="auth_form">
        <div className="input_box">
          <input
            type="email"
            name="email"
            required="required"
            value={userData.email}
            onChange={handleChange}
          ></input>
          <span>введите email</span>
        </div>
        <div className="input_box">
          <input
            type="password"
            name="password"
            required="required"
            value={userData.password}
            onChange={handleChange}
          ></input>
          <span>введите пароль</span>
        </div>
      </div>
      {userExist ? (
        <button
          onClick={() => {
            dispatch(loginUser(userData));
            navigate(-1);
          }}
        >
          Войти
        </button>
      ) : (
        <button
          onClick={() => {
            dispatch(registerUser(userData));
            navigate(-1);
          }}
        >
          Регистрация
        </button>
      )}
    </div>
  );
};

export default Auth;
