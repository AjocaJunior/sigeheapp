import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch,useSelector } from "react-redux";
import { logout } from "../../actions/userActions";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const dispatchLogout = useDispatch();

 

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;
  
  const logoutHandler = ()=>{
    dispatchLogout(logout());
  }



  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Pesquise..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon"/>
            <div className="counter">1</div>
          </div>
          <div className="item">
            <MailOutlineOutlinedIcon className="icon"/>
        <div className="counter">2</div> 
          </div>
          <div className="item" >
          {docenteInfo ? (
            <Link to="/" onClick={logoutHandler} style={{textDecoration:"none"}}>
      <LogoutOutlinedIcon className="icon"/>
          </Link>
          ): <Link to="/login" style={{textDecoration:"none"}}>
      <LogoutOutlinedIcon className="icon"/>
          </Link>}
            
            
          </div>
          <div className="item">
          {docenteInfo ? (
            <Link to="/perfil" style={{textDecoration:"none"}}>
       <AccountCircleOutlinedIcon className="icon"/>
          </Link>
          ): <Link to="/login" style={{textDecoration:"none"}}>
        <AccountCircleOutlinedIcon className="icon"/>
          </Link>}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
