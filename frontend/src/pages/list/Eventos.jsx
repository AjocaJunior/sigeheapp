import React,{useState, useEffect} from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./listEventos.scss";

import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import {format} from "date-fns";
import EventoItem from './EventoItem';
import { createEvento } from "../../actions/eventoActions";
import { useDispatch, useSelector } from "react-redux";
import { EVENTO_CREATE_RESET } from "../../constants/eventoConstants";
const Eventos = () => {
const [openDate, setOpenDate] = useState(false)
  const [date, setDate]= useState([{
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  }])

  const [titulo, setTitulo] = useState();
  const [descricao, setDescricao] = useState();
  const [data1, setData1] = useState();
  const [data2, setData2] = useState();
  const [convidados, setConvidados] = useState();
  const [hora1, setHora1] = useState();
  const [hora2, setHora2] = useState();
  const [bloco, setBloco] = useState();
  const [sala, setSala] = useState();
  const [link, setLink] = useState();
  const [img, setImg] = useState();

  const docenteLogin = useSelector((state) => state.docenteLogin);
  const { docenteInfo } = docenteLogin;


  const eventoCreate = useSelector((state) => state.eventoCreate);
  const {  success,evento } = eventoCreate;

const dispatch = useDispatch();

useEffect(()=>{
dispatch({type:EVENTO_CREATE_RESET})
})

  const createEventoHandler = () => {
    dispatch(createEvento(titulo,
      descricao,
      convidados,
      data1,
      data2,
      hora1,
      hora2,
      bloco,
      sala,
      img,
      link))
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
        
            <input type="text" onChange={(e)=>setTitulo(e.target.value)} placeholder="Título do Evento" />
          </div>
          <div className="formInput">
           
            <input type="text" onChange={(e)=>setDescricao(e.target.value)} placeholder="Descrição do Evento" />
          </div>
          <div className="formInput">
            <label htmlFor="">Datas do evento</label>
            <input type="date" onChange={(e)=>setData1(e.target.value)} className="salaInput" placeholder="Data 1" /> <i>   </i>
            <input type="date" onChange={(e)=>setData2(e.target.value)} className="salaInput" placeholder="Data 2" />
          </div>
          <div className="formInput">
            <label htmlFor="">Periodo do evento</label>
            <input type="time" onChange={(e)=>setHora1(e.target.value)} className="salaInput" placeholder="Hora de início" /> <i>   </i>
            <input type="time" onChange={(e)=>setHora2(e.target.value)} className="salaInput" placeholder="Hora de término" />
          </div>
          <div className="formInput">
            <input type="text" className="salaInput" onChange={(e)=>setBloco(e.target.value)} placeholder="Bloco" />
<i>   </i>            <input type="text" className="salaInput" onChange={(e)=>setSala(e.target.value)} placeholder="Sala" />
          </div>
          <div className="formInput">
           
            <input type="text" onChange={(e)=>setLink(e.target.value)} placeholder="Link para mais informações" />
          </div>
          <div className="formInput">
           <label>Cartaz do evento</label>
           <input type="file" onChange={(e)=>setImg(e.target.value)} />
         </div>
         <div className="formInput">
           <label>Convidados</label>
           <input type="text" onChange={(e)=>setConvidados(e.target.value)} placeholder="Nomes (separados por vírgula)"/>
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
