import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./list.scss";
import DataRelatorio from "../../pages/dataform/DataRelatorio";

const Relatorio = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataRelatorio />
      </div>
    </div>
  );
};

export default Relatorio;
