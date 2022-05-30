import React, { useState, useEffect } from "react";
import { login } from "../../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./login.scss";
import Message from "../../componentes/Message";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const location = useLocation().search;
const navigate = useNavigate();
  const redirect = location.search ? location.split("=")[1] : "/";
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { loading, error, docenteInfo } = docenteLogin;

  useEffect(() => {
    if (docenteInfo) {
      navigate("/");

    }
  }, [navigate, docenteInfo, redirect]);

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch(login(codigo, password));
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="inputItem">
          <img src="http://unimestre.unitiva.ac.mz/arquivo/cliente/imagens/pic_logo_inst.png" />
        </div>
        {error && <Message variant="danger">{error}</Message>}
        <div className="inputItem">
          <input
            type="text"
            placeholder="Código"
            id="codigo"
            value={codigo}
            onChange={(e) => setCodigo(e.target.value)}
            className="inputLogin"
          />
        </div>

        <div className="inputItem">
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="inputLogin"
          />
        </div>
        <div className="inputItem">
          <button onClick={handleClick} type="submit" className="loginButton">
            Login
          </button>
          <div className="inputItem">
            <Link to="/recuperar">Esqueceu o password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
