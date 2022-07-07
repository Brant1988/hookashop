import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/Contacts";
import Header from "./header/Header";
import Home from "./home/Home";
import Hookahs from "./pages/Hookahs";
import Charcoal from "./pages/Charcoal";
import Tobacco from "./pages/Tobacco";
import Accessories from "./pages/Accessories";
import DisposablePODs from "./pages/DisposablePODs";
import PODs from "./pages/PODs";
import Liquids from "./pages/Liquids";
import Sale from "./pages/Sale";
import ShipAndPay from "./pages/ShipAndPay";

const App = () => {
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

export default App;
