import React from "react";
import "./home.scss";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from './../../components/widget/Widget';
import Table from "../../components/table/Table";
import DataForm from "../dataform/DataForm";
// import ListDias from "../../components/table/ListDias";


const Home = () => {

  localStorage.getItem('idGrade');

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer"><Navbar/>
      <div className="widgets">
        <Widget type="aulas"/>
        <Widget type="disciplinas"/>
        <Widget type="grades de horario"/>
        <Widget type="eventos"/>
      </div>
      <DataForm/>
      <div className="listContainer">
        <div className="listTitle">Grade de horário</div>
        <Table/>
        {/* <ListDias/> */}
      </div>
      </div>
    </div>
  );
};

export default Home;
