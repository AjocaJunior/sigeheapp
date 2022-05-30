import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../componentes/Message";
import Loader from "./../componentes/Loader";
import FormContainer from "../componentes/FormContainer";
import { login } from "../actions/userActions";

export const LoginScreen = ({ location, history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split("=")[1] : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
    //DISPATCH LOGIN
  };
  return (
    <FormContainer>
      <h1>Entrar</h1>
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Digite seu Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Button type="submit" variant="primary">
            Entrar
          </Button>
        </Form.Group>
      </Form>

      <Row className="py-3">
        <Col>
          Novo Utilizador?{" "}
          <Link to={redirect ? `/register?redirect= ${redirect}` : "/register"}>
            Registre-se
          </Link>
        </Col>
      </Row>
    </FormContainer>
  );
};

export default LoginScreen;
