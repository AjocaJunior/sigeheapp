import React from "react";
import "./dataformEventos.scss";
import {  useEffect } from "react";

import { useLocation } from "react-router-dom";

import {
  listGrades,
  listGradeDetails,
} from "../../actions/gradeActions";
import { useDispatch } from "react-redux";
import Loader from "../../componentes/Loader";

const DataFormEventos = ({ history }) => {
  const location = useLocation().search;
  const locationValue = location.split("=")[1];
  const dispatch = useDispatch();
  // const gradeList = useSelector((state) => state.gradeList);
  // const { loading, grades } = gradeList;

 

  useEffect(() => {
    dispatch(listGrades());
    
  }, [dispatch, history]);


  // const { datag, loadingG, errorG,reFetch } = useFetchSearchGrade(`/grade?curso=${curso || "Informática de Gestão"}&semestre=${semestre || "1"}`);

  


 
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
