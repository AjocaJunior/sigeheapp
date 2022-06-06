import React, { useEffect, useState } from "react";
import "./single.scss";
import Navbar from "./../../components/navbar/Navbar";
import Sidebar from "./../../components/sidebar/Sidebar";

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
  listGradeDetails,
  updateGrade,
  createGradeDia,
} from "../../actions/gradeActions";
import {
  
  listCursos
  
} from "../../actions/cursoblocoanoActions";
import Loader from "./../../componentes/Loader";
import Message from "./../../componentes/Message";
import {
  GRADE_UPDATE_RESET,
  GRADE_CREATE_DIAS_RESET,
} from "./../../constants/gradeConstants";
import { Button, TableFooter } from "@mui/material";

const Single = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const gradeDiaCreate = useSelector((state) => state.gradeDiaCreate);
  const { success: successDia } = gradeDiaCreate;
  const cursoList = useSelector((state) => state.cursoList);
  const {cursos } = cursoList;
  // const docenteLogin = useSelector((state) => state.docenteLogin);
  // const { docenteInfo } = docenteLogin;

  const gradeDetails = useSelector((state) => state.gradeDetails);
  const { loading, error, grade } = gradeDetails;

  const gradeUpdate = useSelector((state) => state.gradeUpdate);
  const {

    success: successUpdate,
  } = gradeUpdate;

  const [curso, setCurso] = useState("");
  const [codigo, setCodigo] = useState("");
  const [semestre, setSemestre] = useState("");
  const [bloco, setBloco] = useState("");
  const [sala, setSala] = useState("");

  ////////////////////////////////////////
  const [periodo, setPeriodo] = useState("");
  const [segunda, setSegunda] = useState("");
  const [terca, setTerca] = useState("");
  const [quarta, setQuarta] = useState("");
  const [quinta, setQuinta] = useState("");
  const [sexta, setSexta] = useState("");
  // const [sabado, setSabado] = useState("");

  const { id } = useParams();
  useEffect(() => {
    if (successDia) {
      alert("Dados adicionados com sucesso");
      setPeriodo("");
      setSegunda("");
      setTerca("");
      setQuarta("");
      setQuinta("");
      setSexta("");
      dispatch({ type: GRADE_CREATE_DIAS_RESET });
      dispatch(listGradeDetails(id));
    }

    if (successUpdate) {
      dispatch({ type: GRADE_UPDATE_RESET });
      navigate("/grades");
    } else {
      if (grade._id !== id) {
        dispatch(listGradeDetails(id));
      } else {
        setCurso(grade.curso);
        setSemestre(grade.semestre);
        setCodigo(grade.codigo);
        setBloco(grade.bloco);
        setSala(grade.sala);
      }
    }
  }, [dispatch, grade, id, successUpdate, successDia]);

  const updateHandler = () => {
    dispatch(updateGrade({ _id: id, curso, codigo, semestre, bloco, sala }));
  };

  const updateDiaHandler = () => {
    console.log("Update Dia");
  };

  const adicionarDia = (e) => {
    e.preventDefault();
    dispatch(
      createGradeDia(id, { periodo, segunda, terca, quarta, quinta, sexta })
    );
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
                  <label htmlFor="">Curso</label>
                  <input
                    type="text"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                    placeholder="Informatica de Gestao"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Codigo</label>
                  <input
                    type="text"
                    value={codigo}
                    onChange={(e) => setCodigo(e.target.value)}
                    placeholder="Codigo"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Semestre</label>
                  <input
                    type="text"
                    value={semestre}
                    onChange={(e) => setSemestre(e.target.value)}
                    placeholder="Número"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Bloco</label>
                  <input
                    type="text"
                    value={bloco}
                    onChange={(e) => setBloco(e.target.value)}
                    placeholder="Número"
                  />
                </div>
                <div className="formInput">
                  <label htmlFor="">Sala</label>
                  <input
                    type="text"
                    value={sala}
                    onChange={(e) => setSala(e.target.value)}
                    placeholder="Número/Nome"
                  />
                </div>

                <button onClick={updateHandler}>
                  <i className="fas fa-plus"></i>Actualizar
                </button>
              </form>
            </div>
          )}
        </>
        <div>
          <form action="">
            <input
              type="text"
              placeHolder="Periodo"
              onChange={(e) => setPeriodo(e.target.value)}
            />
            <input
              type="text"
              placeHolder="Segunda"
              onChange={(e) => setSegunda(e.target.value)}
            />
            <input
              type="text"
              placeHolder="Terça"
              onChange={(e) => setTerca(e.target.value)}
            />
            <input
              type="text"
              placeHolder="Quarta"
              onChange={(e) => setQuarta(e.target.value)}
            />
            <input
              type="text"
              placeHolder="Quinta"
              onChange={(e) => setQuinta(e.target.value)}
            />
            <input
              type="text"
              placeHolder="Sexta"
              onChange={(e) => setSexta(e.target.value)}
            />
            <button onClick={adicionarDia}>Adicionar</button>
          </form>
        </div>

        <div className="bottom">
          <h1 className="title">Grade de Horários</h1>
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
                {grade.dias.map((dia) => (
                  <TableRow key={dia._id}>
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
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.terca}
                      ></input>
                    </TableCell>
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.quarta}
                      ></input>
                    </TableCell>
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.quinta}
                      ></input>
                    </TableCell>
                    <TableCell className="tableCell">
                      <input
                        type="text"
                        className="inputTable"
                        value={dia.sexta}
                      ></input>
                    </TableCell>

                    {/*                     
                      <TableCell className="tableCell">
                        <input type="text" className="inputTable" value={dia.sabado}></input>
                      </TableCell> */}
                  </TableRow>
                ))}
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

export default Single;
