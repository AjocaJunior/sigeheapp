import React from "react";
import { Container } from "react-bootstrap";
import Header from "./componentes/Header";
import Footer from "./componentes/Footer";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ListDisciplinas from "./pages/list/ListDisciplinas";
import ListSalas from "./pages/list/ListSalas";
import ListDocentes from "./pages/list/ListDocentes";
import Eventos from "./pages/list/Eventos";
import Relatorio from "./pages/list/Relatorio";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import Perfil from "./pages/perfil/Perfil";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/register/Register";
import SingleDocente from './pages/single/SingleDocente';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<Home />} exact />
          <Route path="/?" index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/docentes" index element={<ListDocentes />} />

          <Route path="docentes/:id" element={<SingleDocente />} />
          <Route path="new" element={<New />} />

          <Route path="grades" index element={<List />} />

          <Route path="/grades/:id" element={<Single />} />
          <Route path="new" element={<New />} />
          <Route path="/disciplinas" element={<ListDisciplinas />} />
          <Route path="/salas" element={<ListSalas/>} />
          <Route path="/eventos" element={<Eventos/>} />
          <Route path="/relatorio" element={<Relatorio/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
