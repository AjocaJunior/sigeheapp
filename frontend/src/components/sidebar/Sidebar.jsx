import React from "react";
import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import GroupIcon from "@mui/icons-material/Group";
import ClassIcon from "@mui/icons-material/Class";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import EventIcon from "@mui/icons-material/Event";
import SummarizeIcon from "@mui/icons-material/Summarize";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import { DarkModeContext } from "./../../context/darkModeContext";
import { useContext } from "react";
import { AuthContext } from "./../../context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../actions/userActions";

const Sidebar = () => {
  const dispatchLogout = useDispatch();

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  const logoutHandler = () => {
    dispatchLogout(logout());
  };

  const { dispatch } = useContext(DarkModeContext);
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">SIGEHE</span>
          </Link>
        </div>
        <hr />
        <div className="center">
          <ul>
            <li>
              <img
                src="http://ajocajr.com/static/media/assisnerd.4d0ce94a133ff8537b55.gif"
                alt="assisjr"
                className="avatar"
              />
            </li>
            {docenteInfo ? (
              <Link to="/perfil" style={{ textDecoration: "none" }}>
                <li>
                  <AccountCircleIcon className="icon" />
                  <span>{docenteInfo.codigo}</span>
                </li>
              </Link>
            ) : (
              <Link to="/login" style={{ textDecoration: "none" }}>
                <li>
                  <AccountCircleIcon className="icon" />
                  <span>Perfil</span>
                </li>
              </Link>
            )}
            <Link to="/" style={{ textDecoration: "none" }}>
              <li>
                <DashboardIcon className="icon" />
                <span>Dashboard</span>
              </li>
            </Link>
            <Link to="/grades" style={{ textDecoration: "none" }}>
              <li>
                <CalendarTodayIcon className="icon" />
                <span>Grade de Horário</span>
              </li>
            </Link>
            {docenteInfo && docenteInfo.isAdmin && (
              <Link to="/docentes" style={{ textDecoration: "none" }}>
                <li>
                  <GroupIcon className="icon" />
                  <span>Docentes</span>
                </li>
              </Link>
            )}
            {docenteInfo && docenteInfo.isAdmin && (
              <Link to="/disciplinas" style={{ textDecoration: "none" }}>
                <li>
                  <ClassIcon className="icon" />
                  <span>Disciplinas</span>
                </li>
              </Link>
            )}
            {docenteInfo && docenteInfo.isAdmin && (
              <Link to="/salas" style={{ textDecoration: "none" }}>
                <li>
                  <MeetingRoomIcon className="icon" />
                  <span>Salas</span>
                </li>
              </Link>
            )}
            <Link to="/eventos" style={{ textDecoration: "none" }}>
              <li>
                <EventIcon className="icon" />
                <span>Eventos</span>
              </li>
            </Link>
            {docenteInfo && docenteInfo.isAdmin && (
              <Link to="/relatorio" style={{ textDecoration: "none" }}>
                <li>
                  <SummarizeIcon className="icon" />
                  <span>Relatório</span>
                </li>
              </Link>
            )}

            <Link
              onClick={logoutHandler}
              to="/"
              style={{ textDecoration: "none" }}
            >
              <li>
                <LogoutIcon className="icon" />
                <span>Sair</span>
              </li>
            </Link>
          </ul>
        </div>
        <div className="bottom">
          {" "}
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "LIGHT" })}
          ></div>
          <div
            className="colorOption"
            onClick={() => dispatch({ type: "DARK" })}
          ></div>{" "}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
