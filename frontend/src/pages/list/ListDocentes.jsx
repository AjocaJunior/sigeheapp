import React from "react";
import Sidebar from "./../../components/sidebar/Sidebar";
import Navbar from "./../../components/navbar/Navbar";
import "./list.scss";
import DatatableDocentes from "../../components/datatable/DatatableDocentes";

const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DatatableDocentes />
      </div>
    </div>
  );
};

export default List;
