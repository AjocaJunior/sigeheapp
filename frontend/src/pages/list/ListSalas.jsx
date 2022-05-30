import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import DatatableSalas from "../../components/datatable/DatatableSalas";
import DataFormSalas from './../dataform/DataFormSalas';

const ListSalas = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataFormSalas/>
       
      </div>
    </div>
  );
};

export default ListSalas;
