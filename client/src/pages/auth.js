import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../reducers/auth";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // const [userExist, setUserExist] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    setUserData({
      ...userData,
      [e.target.name]: value,
    });
  };
  console.log(userData);

  return (
    <div className="wrapper">
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
      <button
        onClick={() => {
          dispatch(loginUser(userData));
          navigate(-1);
        }}
      >
        Войти
      </button>
    </div>
  );
};

export default Auth;
