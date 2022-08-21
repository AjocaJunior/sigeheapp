import React, { useEffect, useState } from "react";
import "./eventoItem.css";
import { useSelector, useDispatch } from "react-redux";
import { listEventos } from "./../../actions/eventoActions";

const EventoItem = () => {
  const dispatch = useDispatch();

  const eventoList = useSelector((state) => state.eventoList);
  const { eventos } = eventoList;

  useEffect(() => {
    dispatch(listEventos());

    // const socket = io("http://localhost:8880");
    // console.log(socket.on("primeiroEvento", (msg)=>{
    //   console.log(msg)
    // }))
  }, [dispatch]);

  return (
    <>
      {eventos.map((item) => (
        <div className="eventoItem" key={item._id}>
          <img src={item.img} alt="" className="imgItem" />

          <div className="itemDescricao">
            <h1 className="eventoTitulo">{item.titulo}</h1>
            <h4 className="eventoDesc">{item.descricao}</h4>
            <span className="eventoData">
              Data: {item.data1} {item.data2 ? <i>a</i> : <i> </i>} {item.data2}
            </span>
            <span className="eventoPeriodo">
              Periodo: {item.hora1} {item.hora2 ? <i>até</i> : <i> </i>}{" "}
              {item.hora2}
            </span>
            <span className="eventoSala">
              Bloco: {item.bloco} - Sala: {item.sala}
            </span>
            <span className="eventoConvidados">
              {item.convidados ? item.convidados : "Sem convidados"}
            </span>
            <span>
              <a href={item.link} target="_blank" rel="noreferrer">
                Ver mais
              </a>
            </span>
          </div>
        </div>
      ))}
    </>
  );
};

export default EventoItem;
