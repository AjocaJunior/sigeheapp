import React from "react";
import "./dataform.scss";
import { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { useSelector, useDispatch } from "react-redux";
import Loader from "../../componentes/Loader";
import { listBlocos,listBlocoDetails } from './../../actions/cursoblocoanoActions';

const DataFormSalas = ({ history }) => {
  const location = useLocation().search;
  const locationValue = location.split("=")[1];
  const dispatch = useDispatch();
  
  const blocoDetail = useSelector((state) => state.blocoDetail);
  const { loading, bloco } = blocoDetail;


  const blocoList = useSelector((state) => state.blocoList);
  const {blocos } = blocoList;
 
  const defaultId = "628ff12127daad5de8766380";
  useEffect(() => {
    dispatch(listBlocos());
    if(locationValue ){
      dispatch(listBlocoDetails(locationValue ))
    }else{
      dispatch(listBlocoDetails(defaultId))
    }
    
  }, [dispatch, history, locationValue]);

  const [numero, setNumero] = useState();


  // const { datag, loadingG, errorG,reFetch } = useFetchSearchGrade(`/grade?curso=${curso || "Informática de Gestão"}&semestre=${semestre || "1"}`);

  const handleClick = () => {
    history.push(`/?`);
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
              <label htmlFor="id">Bloco: </label>
              <select name="id" id="">
                {blocos.map((item) => (
                  <option
                    value={item._id}
                    onChange={(e) => setNumero(e.target.value)}
                  >
                    {item.numero}
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
      <Table sx={{ minWidth: 400 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{backgroundColor:"#008080", }}>
            <TableCell sx={{color:"#ffffff", fontSize:"14px", fontWeight:"bold"}} className="tableCell">Número</TableCell>
            
            <TableCell sx={{color:"#ffffff", fontSize:"14px", fontWeight:"bold"}}  className="tableCell"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <>
            {(bloco.salas).map((sala) => (
              <TableRow key={sala._id}>
                <TableCell className="tableCell">{sala.numero}</TableCell>
               
                <TableCell className="tableCell"><button className="formInput">Modificar </button><i>  </i><button className="formInput"> Apagar</button></TableCell>
              </TableRow>
            ))}
          </>
        </TableBody>
      </Table>
    </TableContainer> 
    
    
    </>
  );
};

export default DataFormSalas;
