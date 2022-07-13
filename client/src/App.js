import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./reducers/index";
import AppRouter from "./AppRouter";

const App = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};

export default App;
