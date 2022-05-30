import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";


import DataFormDisciplinas from "../dataform/DataFormDisciplinas";

const ListDisciplinas = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataFormDisciplinas/>
       
      </div>
    </div>
  );
};

export default ListDisciplinas;
