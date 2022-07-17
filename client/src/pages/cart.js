import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseAmount,
  increaseAmount,
  removeFromCart,
} from "../reducers/cart";
import "./pages.css";

const Cart = () => {
  const dispatch = useDispatch();

  const { cart, cartTotalAmount, cartTotalPrice } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="wrapper">
      <div className="shopping_cart">
        {cart.map((product) => {
          return (
            <div className="cart_product" key={product.id}>
              <img
                width={70}
                height={70}
                src={"http://localhost:5000/" + product.img}
                alt={product.name}
              ></img>
              <div>{product.name}</div>
              <div>{product.price} руб</div>
              <div className="amount_control">
                <button
                  className="btn_incr"
                  onClick={() => dispatch(increaseAmount(product.id))}
                >
                  +
                </button>
                <div>{product.amount}</div>

                <button
                  className="btn_decr"
                  onClick={() => dispatch(decreaseAmount(product.id))}
                >
                  -
                </button>
              </div>
              <div>{product.amount * product.price} руб</div>
              <button onClick={() => dispatch(removeFromCart(product.id))}>
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          );
        })}
        <div className="summary">
          <h2>{`Всего товаров:  ${cartTotalAmount}`}</h2>
          <h2>{`Сумма заказа:  ${cartTotalPrice}`}</h2>
        </div>
      </div>
    </div>
  );
};

export default Cart;
