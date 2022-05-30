import React from "react";
import "./dataform.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  listCursoDetails,
  listCursos
  
} from "../../actions/cursoblocoanoActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../componentes/Loader";
const DataFormDisciplinas = ({ history }) => {
  const location = useLocation().search;
  const locationValue = location.split("=")[1];
  const dispatch = useDispatch();
 


  const cursoDetail = useSelector((state) => state.cursoDetail);
  const { loading, curso } = cursoDetail;


  const cursoList = useSelector((state) => state.cursoList);
  const {cursos } = cursoList;

const defaultId = "62858fb2e661fe4facd9b57d";
  useEffect(() => {
    dispatch(listCursos());
    if(locationValue ){
      dispatch(listCursoDetails(locationValue ))
    }else{
      dispatch(listCursoDetails(defaultId))
    }
    
  }, [dispatch, history,locationValue]);


  const [name, setName] = useState('');

  // const { datag, loadingG, errorG,reFetch } = useFetchSearchGrade(`/grade?curso=${curso || "Informática de Gestão"}&semestre=${semestre || "1"}`);

  const handleClick = () => {
    history.push("/");
  };


 


  return (
    <>
    
    <div className="dataformContainer">
    <form action="">
        {loading ? (
          <Loader />
        ) : (
          <>
            <div className="formInput">
              <label htmlFor="id">Curso: </label>
              <select name="id" id="">
                {cursos.map((item) => (
                  <option
                    value={item._id}
                    onChange={(e) => setName(e.target.value)}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        {loading ? (
          "Processando..."
        ) : (
          <>       
      
     </>    
        )}
        <div className="formInput">
          <button onClick={handleClick}>Pesquisar</button>
        </div>
      </form>
    </div>
   
    <TableContainer component={Paper} sx={{marginLeft:"auto", marginRight:"auto", border:"1px solid rgba(0,0,0,0.2)", width:"max-content"}} className="table">
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{backgroundColor:"#008080", }}>
            <TableCell sx={{color:"#ffffff", fontSize:"14px", fontWeight:"bold"}} className="tableCell">Codigo</TableCell>
            <TableCell sx={{color:"#ffffff", fontSize:"14px", fontWeight:"bold"}}  className="tableCell">Nome</TableCell>
            <TableCell sx={{color:"#ffffff", fontSize:"14px", fontWeight:"bold"}}  className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {(curso.disciplinas).map((disciplina) => (
              <TableRow key={disciplina._id}>
                <TableCell className="tableCell">{disciplina.codigo}</TableCell>
                <TableCell className="tableCell">{disciplina.name}</TableCell>
                <TableCell className="tableCell"><button className="formInput">Modificar </button><i>  </i><button className="formInput"> Apagar</button></TableCell>
              </TableRow>
            ))}
          </>
        </TableBody>
      </Table>
    </TableContainer> </>
  );
};

export default DataFormDisciplinas;
