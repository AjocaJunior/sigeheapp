import React,{useState} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./listEventos.scss";
import DataFormEventos from "../dataform/DataFormEventos";
import DatatableEventos from './../../components/datatable/DatatableEventos';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import EventoItem from './EventoItem';
import { useDispatch, useSelector } from "react-redux";
const Eventos = () => {
const [openDate, setOpenDate] = useState(false)
  const [date, setDate]= useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;

  const createEventoHandler = () => {
    //dispatch 
  };
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        {docenteInfo && docenteInfo.isAdmin && (
        <div className="bottom">
        <form action="">
          <div className="formInput">
        
            <input type="text" placeholder="Título do Evento" />
          </div>
          <div className="formInput">
           
            <input type="text" placeholder="Descrição do Evento" />
          </div>
          <div className="formInput">
            <label htmlFor="">Datas do evento</label>
            <input type="date" className="salaInput" placeholder="Data 1" /> <i>   </i>
            <input type="date" className="salaInput" placeholder="Data 2" />
          </div>
          <div className="formInput">
            <label htmlFor="">Periodo do evento</label>
            <input type="time" className="salaInput" placeholder="Hora de início" /> <i>   </i>
            <input type="time" className="salaInput" placeholder="Hora de término" />
          </div>
          <div className="formInput">
            <input type="text" className="salaInput" placeholder="Bloco" />
<i>   </i>            <input type="text" className="salaInput" placeholder="Sala" />
          </div>
          <div className="formInput">
           
            <input type="text" placeholder="Link para mais informações" />
          </div>
          <div className="formInput">
           <label>Cartaz do evento</label>
           <input type="image" src="" alt="flyer"/>
         </div>
         <div className="formInput">
           <label>Convidados</label>
           <input type="text" placeholder="Nomes (separados por vírgula)"/>
         </div>
          <button onClick={createEventoHandler}>
            <i className="fas fa-plus"></i>Adicionar
          </button>
        </form>
      </div>
        )}
        <div className="listWrapper">
           <div className="listSearch">
             <h2  className="lsTitle">
               Pesquisar eventos
             </h2>
             <div className="lsItem">
               <label htmlFor="">Título ou Tema: </label>
               <input type="text" />
             </div>
             <div className="lsItem">
               <label htmlFor="">Datas: <i onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, "MM/dd/yyyy")} a ${format(date[0].endDate, "MM/dd/yyyy")}` }</i></label>
            {openDate &&  <DateRange
            minDate={new Date()}
               editableDateInputs={true}
               onChange={item => setDate([item.selection])}
               moveRangeOnFirstSelection={false}
        ranges={date}
     className="date"
      />}
             </div>
             <div className="lsItem">
               <button className="btnPesquisar">Pesquisar</button>
             </div>
           </div>
           <div className="listResult">
     
             <EventoItem/>
            
           </div>
        </div>
       
      </div>
    </div>
  );
};

export default Eventos;
