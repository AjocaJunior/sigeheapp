import React from "react";
import "./new.scss";
import Navbar from "./../../components/navbar/Navbar";
import Sidebar from "./../../components/sidebar/Sidebar";
const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Adicionar Nova Grade</h1>
        </div>
        <div className="bottom">
          <form action="">
            <div className="formInput">
              <label htmlFor="">Curso</label>
              <input type="text" placeholder="Informatica de Gestao"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Codigo</label>
              <input type="text" placeholder="(Curso&Número)"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Semestre</label>
              <input type="text" placeholder="Número"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Bloco</label>
              <input type="text" placeholder="Número"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Sala</label>
              <input type="text" placeholder="Número/Nome"/>
            </div>
          
            <button>Salvar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
