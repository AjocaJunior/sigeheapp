import React, { useEffect, useState } from "react";
import "./single.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  docenteDetailsDados,
  updateDocente,
} from "../../actions/userActions";
import Loader from "../../componentes/Loader";
import Message from "../../componentes/Message";

import { Button, TableFooter } from "@mui/material";
import { DOCENTE_UPDATE_DATA_RESET } from './../../constants/userConstants';

const SingleDocente = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [codigo, setCodigo] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contacto, setContacto] = useState("");

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

  const docenteDetailsData = useSelector((state) => state.docenteDetailsData);
  const { loading, error, docente } = docenteDetailsData;

  const docenteUpdateData = useSelector(
    (state) => state.docenteUpdateData
  );
  const { success } = docenteUpdateData;

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  const { id } = useParams();

  useEffect(() => {
    dispatch(docenteDetailsDados(id));
    if(success){
      dispatch({type: DOCENTE_UPDATE_DATA_RESET})
      navigate("/docentes")
    }else{
 ///
      
    }
   
  }, [dispatch, id, docenteInfo,success]);

  const updateHandler = async (e) => {
    e.preventDefault();

    dispatch(
      updateDocente({ _id: id, name, email, codigo, contacto, password })
    );
  };

  const updateDiaHandler = () => {
    console.log("Update Dia");
  };

  const adicionarDia = (e) => {
    e.preventDefault();
    dispatch();
    // createGradeDia(id, { periodo, segunda, terca, quarta, quinta, sexta })
  };

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />

        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <div className="bottom1">
              <form action="">
                <div className="formInput">
                  <label htmlFor="">Codigo</label>
                  <input disabled
                    type="text"
                    value={docente.codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Codigo"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Nome</label>
                  <input
                    type="text"
                    value={docente.name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    value={docente.email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Contacto</label>
                  <input
                    type="text"
                    value={docente.contacto}
                    onChange={(e) => setContacto(e.target.value)}
                    placeholder="Telefone"
                  />
                   <input
                    type="text"
                    value={docente.codigo}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" hidden
                  />
                </div>

                <button onClick={updateHandler}>
                  <i className="fas fa-plus"></i>Actualizar
                </button>
              </form>
            </div>
          )}
        </>

        <div className="bottom">
          <h1 className="title">Disponibilidade</h1>
          {/* <List /> */}
          <TableContainer component={Paper} className="table">
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell className="tableCell">Periodo</TableCell>
                  <TableCell className="tableCell">Segunda-feira</TableCell>
                  <TableCell className="tableCell">Terça-feira</TableCell>
                  <TableCell className="tableCell">Quarta-feira</TableCell>
                  <TableCell className="tableCell">Quinta-feira</TableCell>
                  <TableCell className="tableCell">Sexta-feira</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {/* {grade.dias.length === 0 && <Message>Sem data</Message>} */}
                {/* {docente.map((item) => (
                  <TableRow key={item._id}>
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.periodo}
                      ></input>
                    </TableCell>
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.segunda}
                      ></input>
                    </TableCell>
                    

                  </TableRow>
                ))} */}
              </TableBody>
              <TableFooter>
                <Button onClick={updateDiaHandler}>Actualizar</Button>
              </TableFooter>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default SingleDocente;
