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
const createGrade = asyncHandler(async (req, res) => {
  const grade = await new Grade({
    curso: "Null",
    codigo: "Null",
    docente: req.docente._id,
    semestre: 0,
    bloco: "Null",
    sala: "Null",
  });
  const createdGrade = await grade.save();
  res.status(201).json(createdGrade);
});

//CRIAR GRADE
const updateGrade = asyncHandler(async (req, res) => {
  const { curso, codigo, semestre, bloco, sala } = req.body;

  const grade = await Grade.findById(req.params.id);

  if (grade) {
    grade.curso = curso;
    grade.codigo = codigo;
    grade.semestre = semestre;
    grade.bloco = bloco;
    grade.sala = sala;

    const updatedGrade = await grade.save();
    res.json(updatedGrade);
  } else {
    res.status(404);
    throw new Error("Grade não encontrada");
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
    await grade.save()
    res.status(201).json({message:'Aulas Adicionadas'})
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
  createGrade,
  updateGrade,
  deleteGrade,
  createDias,
};
