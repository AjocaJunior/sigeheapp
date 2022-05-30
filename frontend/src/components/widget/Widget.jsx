import React, { useEffect } from "react";
import "./widget.scss";
import CastForEducationOutlinedIcon from "@mui/icons-material/CastForEducationOutlined";
import ClassIcon from "@mui/icons-material/Class";
import EventIcon from "@mui/icons-material/Event";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { listCursos } from "../../actions/cursoblocoanoActions";

import { useSelector, useDispatch } from "react-redux";
import { listDocentes } from "./../../actions/userActions";
const Widget = ({ type }) => {
  let dataa;
  const dispatch = useDispatch();
  const cursoList = useSelector((state) => state.cursoList);
  const { loading, cursos } = cursoList;

  const docenteList = useSelector((state) => state.docenteList);
  const { error, docentes } = docenteList;

  useEffect(() => {
    dispatch(listCursos());
    dispatch(listDocentes());
  }, [dispatch]);

  const totalCursos = cursos.length;
  

  switch (type) {
    case "aulas":
      dataa = {
        title: "CURSOS",
        isMoney: false,
        counter: totalCursos,
        link: "Ver todos cursos",
        icon: (
          <CastForEducationOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "purple" }}
          />
        ),
      };
      break;
    case "disciplinas":
      dataa = {
        title: "DOCENTES",
        isMoney: false,
        counter: 4,
        link: "Ver todos docentes",
        icon: (
          <ClassIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "grades de horario":
      dataa = {
        title: "GRADES DE HORÁRIO",
        isMoney: false,
        counter: 4,
        link: "Ver todas grades de horário",
        icon: (
          <CalendarTodayIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "yellow" }}
          />
        ),
      };
      break;
    case "eventos":
      dataa = {
        title: "EVENTOS",
        isMoney: false,
        counter: 2,
        link: "Ver todos eventos",
        icon: (
          <EventIcon
            className="icon"
            style={{ backgroundColor: "rgba(128,0,128,0.2)", color: "black" }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      {loading ? (
        "Processando..."
      ) : (
        <>
          {" "}
          <div className="left">
            <span className="aulas">{dataa.title}</span>
            <span className="counter">{dataa.counter}</span>
            <span className="link">{dataa.link}</span>
          </div>
        </>
      )}
      <div className="right">{dataa.icon}</div>
    </div>
  );
};

export default Widget;
