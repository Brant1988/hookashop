import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./reducers/index";
import AppRouter from "./AppRouter";
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

let persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
};

export default App;
