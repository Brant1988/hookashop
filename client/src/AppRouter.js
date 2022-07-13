import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Contacts />} path="/contacts" />
        <Route element={<Sale />} path="/sale" />
        <Route element={<ShipAndPay />} path="/shipment"></Route>
        <Route element={<Hookahs />} path="/hookahs" />
        <Route element={<Tobacco />} path="/tobacco"></Route>
        <Route element={<Charcoal />} path="/charcoal"></Route>
        <Route element={<Accessories />} path="/accessories"></Route>
        <Route element={<DisposablePODs />} path="/disposablePODs"></Route>
        <Route element={<PODs />} path="/PODs"></Route>
        <Route element={<Liquids />} path="/liquids"></Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
