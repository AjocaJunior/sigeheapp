import React, { useState, useEffect } from "react";
import { register } from "../../actions/userActions";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./register.scss";
import Message from "../../componentes/Message";
import { useDispatch, useSelector } from "react-redux";

const Register = () => {
  const location = useLocation().search;
const navigate = useNavigate();
  const redirect = location.search ? location.split("=")[1] : "/";
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const docenteRegister = useSelector((state) => state.docenteRegister);
  const { loading, error, docenteInfo } = docenteRegister;

  useEffect(() => {
    if (docenteInfo) {
      navigate("/");

    }
  }, [navigate, docenteInfo, redirect]);

  const handleClick = async (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      setMessage('Os passwords são diferentes')
    }else{
        dispatch(register(name,codigo,email, password));
    }
  
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <div className="inputItem">
          <img src="http://unimestre.unitiva.ac.mz/arquivo/cliente/imagens/pic_logo_inst.png" />
        </div>
        {message && <Message variant="danger">{message}</Message>}
        {error && <Message variant="danger">{error}</Message>}
        <div className="inputItem">
          <input
            type="text"
            placeholder="Nome"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="inputLogin"
          />
        </div>
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
            type="text"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <input
            type="password"
            placeholder="Confirm Password"
            id="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="inputLogin"
          />
        </div>
        <div className="inputItem">
          <button onClick={handleClick} type="submit" className="loginButton">
            Registrar
          </button>
          <div className="inputItem">
            <Link to="/login">Já tem conta?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
