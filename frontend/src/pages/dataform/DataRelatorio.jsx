import React from "react";
import "./dataformEventos.scss";
import { useState, useEffect } from "react";

import { useParams, useLocation } from "react-router-dom";

import {
  listGrades,
  listGradeDetails,
} from "../../actions/gradeActions";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../componentes/Loader";

const DataFormEventos = ({ history }) => {
  const location = useLocation().search;
  const locationValue = location.split("=")[1];
  const dispatch = useDispatch();
  const gradeList = useSelector((state) => state.gradeList);
  const { loading, grades } = gradeList;

 

  useEffect(() => {
    dispatch(listGrades());
    
  }, [dispatch, history]);

  const [curso, setCurso] = useState();
  const [semestre, setSemestre] = useState();
  const [bloco, setBloco] = useState();
  const [sala, setSala] = useState();

  // const { datag, loadingG, errorG,reFetch } = useFetchSearchGrade(`/grade?curso=${curso || "Informática de Gestão"}&semestre=${semestre || "1"}`);

  const handleClick = () => {
    history.push(`/?`);
  };

  const gradeDetails = useSelector((state) => state.gradeDetails);
  const {  error, grade } = gradeDetails;

 
useEffect(()=>{
 
  if (locationValue) {
    dispatch(listGradeDetails(locationValue));
    localStorage.setItem('idGrade',locationValue);
  }

},[dispatch, locationValue])
  return (
    <div className="dataformContainer">
     <Loader/>
    </div>
  );
};

export default DataFormEventos;
