import asyncHandler from "express-async-handler";
import Evento from "../models/eventoModel.js";

// @desc        Fetch all products
// @routes      GET /api/products
// @access      Public
const getEventos = asyncHandler(async (req, res) => {
  const eventos = await Evento.find({});
  res.json(eventos);
});

// @desc        Single product
// @routes      GET /api/products/:id
// @access      Public
const getEventoById = asyncHandler(async (req, res) => {
  const evento = await Evento.findById(req.params.id);
  if (evento) {
    res.json(evento);
  } else {
    res.status(404);
    throw new Error("Evento não encontrada");
  }
});

//APAGAR GRADE
const deleteGrade = asyncHandler(async (req, res) => {
  const grade = await Grade.findById(req.params.id);
  if (grade) {
    await grade.remove();
    res.json({ message: "Grade de horário Apagada" });
  } else {
    res.status(404);
    throw new Error("Grade de horário não encontrada");
  }
});

//CRIAR GRADE
const createEvento = asyncHandler(async (req, res) => {
  const {
    titulo,
    descricao,
    convidados,
    data1,
    data2,
    hora1,
    hora2,
    bloco,
    sala,
    img,
    link,
  } = req.body;
  const evento = await Evento.create({
    titulo,
    descricao,
    convidados,
    data1,
    data2,
    hora1,
    hora2,
    bloco,
    sala,
    img,
    link,
  });

  if (evento) {
    res.status(201).json({
      titulo: evento.titulo,
      descricao: evento.descricao,
      convidados: evento.convidados,
      data1: evento.data1,
      data2: evento.data2,
      hora1: evento.hora1,
      hora2: evento.hora2,
      bloco: evento.bloco,
      sala: evento.sala,
      img: evento.img,
      link: evento.link,
    });
  } else {
    res.status(400);
    throw new Error("Dados Inválidos");
  }
});

//CRIAR GRADE
const updateEvento = asyncHandler(async (req, res) => {
  const {
    titulo,
    descricao,
    convidados,
    data1,
    data2,
    hora1,
    hora2,
    img,
    link,
    bloco,
    sala,
  } = req.body;

  const evento = await Evento.findById(req.params.id);

  if (evento) {
    evento.titulo = titulo;
    evento.descricao = descricao;
    evento.convidados = convidados;
    evento.data1 = data1;
    evento.data2 = data2;
    evento.hora1 = hora1;
    evento.hora2 = hora2;
    evento.img = img;
    evento.link = link;
    evento.bloco = bloco;
    evento.sala = sala;

    const updatedEvento = await evento.save();
    res.json(updatedEvento);
  } else {
    res.status(404);
    throw new Error("Evento não encontrado");
  }
});

//CRIAR DIAS
const createDias = asyncHandler(async (req, res) => {
  const { segunda, terca, quarta, quinta, sexta, sabado, periodo } = req.body;

  const grade = await Grade.findById(req.params.id);

  if (grade) {
    const dia = {
      name: req.docente.name,
      segunda,
      terca,
      quarta,
      quinta,
      sexta,
      sabado,
      periodo,
      docente: req.docente._id,
    };
    grade.dias.push(dia);
    await grade.save();
    res.status(201).json({ message: "Aulas Adicionadas" });
  } else {
    res.status(404);
    throw new Error("Grade não encontrada");
  }
});

const getSearchGrade = asyncHandler(async (req, res) => {
  const semestre = req.query;
  const grade = await Grade.find(semestre);
  if (grade) {
    res.json(grade);
  } else {
    res.status(404);
    throw new Error("Grade não encontrada");
  }
});

export {
  getEventos,
  getEventoById,
  getSearchGrade,
  createEvento,
  updateEvento,
  deleteGrade,
  createDias,
};
