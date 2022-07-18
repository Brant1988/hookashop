import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Contacts from "./pages/contacts";
import Header from "./components/header/Header";
import Home from "./components/main/Main";
import Hookahs from "./pages/hookahs";
import Charcoal from "./pages/charcoal";
import Tobacco from "./pages/tobacco";
import Accessories from "./pages/accessories";
import DisposablePODs from "./pages/disposablePODs";
import PODs from "./pages/pods";
import Liquids from "./pages/liquids";
import Sale from "./pages/sale";
import ShipAndPay from "./pages/shipAndPay";
import Auth from "./pages/auth";
import Cart from "./pages/cart";
import ProductPage from "./pages/productPage";
import CategoryPage from "./pages/categoryPage";
import { useDispatch, useSelector } from "react-redux";
import { getTotals } from "./reducers/cart";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getTotals());
  }, [cart, dispatch]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Sale />} path="/sale" />
        <Route element={<ShipAndPay />} path="/shipment"></Route>
        <Route element={<Auth />} path="/auth" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<Hookahs />} path="/hookahs" />
        <Route element={<Tobacco />} path="/tobacco"></Route>
        <Route element={<Charcoal />} path="/charcoal"></Route>
        <Route element={<Accessories />} path="/accessories"></Route>
        <Route element={<DisposablePODs />} path="/disposablePODs"></Route>
        <Route element={<PODs />} path="/PODs"></Route>
        <Route element={<Liquids />} path="/liquids"></Route>
        <Route element={<ProductPage />} path={"/:name"}></Route>
        <Route element={<CategoryPage />} path={"/brand/:name"}></Route>
        <Route element={<Navigate to="/" />} path="/redirect"></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
