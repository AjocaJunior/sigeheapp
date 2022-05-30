import asyncHandler from "express-async-handler";
import Curso from "../models/cursoModel.js";
import Ano from "../models/anoModel.js";
import Bloco from "../models/blocoModel.js";

// @desc        Fetch all products
// @routes      GET /api/products
// @access      Public
const getCursos = asyncHandler(async (req, res) => {
  const cursos = await Curso.find({});
  res.json(cursos);
});

// @desc        Single product
// @routes      GET /api/products/:id
// @access      Public
const getCursoById = asyncHandler(async (req, res) => {
  const curso = await Curso.findById(req.params.id);
  if (curso) {
    res.json(curso);
  } else {
    res.status(404);
    throw new Error("Curso não encontrado");
  }
});

const getBlocos = asyncHandler(async (req, res) => {
  const blocos = await Bloco.find({});
  res.json(blocos);
});

// @desc        Single product
// @routes      GET /api/products/:id
// @access      Public
const getBlocoById = asyncHandler(async (req, res) => {
  const bloco = await Bloco.findById(req.params.id);
  if (bloco) {
    res.json(bloco);
  } else {
    res.status(404);
    throw new Error("Bloco não encontrado");
  }
});

const getAnos = asyncHandler(async (req, res) => {
  const anos = await Ano.find({});
  res.json(anos);
});

// @desc        Single product
// @routes      GET /api/products/:id
// @access      Public
const getAnoById = asyncHandler(async (req, res) => {
  const ano = await Ano.findById(req.params.id);
  if (ano) {
    res.json(ano);
  } else {
    res.status(404);
    throw new Error("Ano não encontrado");
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
const createDisciplinas = asyncHandler(async (req, res) => {
  const { name, codigo } = req.body;

  const curso = await Curso.findById(req.params.id);

  if (curso) {
    const disciplina = {
      name,
      codigo,
    };
    curso.disciplinas.push(disciplina);
    await curso.save();
    res.status(201).json({ message: "Disciplina Adicionada" });
  } else {
    res.status(404);
    throw new Error("Curso não encontrado");
  }
});
//CRIAR DIAS
const createSalas = asyncHandler(async (req, res) => {
  const { numero } = req.body;

  const bloco = await Bloco.findById(req.params.id);

  if (bloco) {
    const sala = {
      numero,
    };
    bloco.salas.push(sala);
    await bloco.save();
    res.status(201).json({ message: "Sala Adicionada" });
  } else {
    res.status(404);
    throw new Error("Bloco não encontrado");
  }
});
//CRIAR DIAS
const createSemestres = asyncHandler(async (req, res) => {
  const { numero } = req.body;

  const ano = await Ano.findById(req.params.id);

  if (ano) {
    const sem = {
      numero,
    };
    ano.semestre.push(sem);
    await ano.save();
    res.status(201).json({ message: "Semestre Adicionado" });
  } else {
    res.status(404);
    throw new Error("Ano não encontrado");
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
  getCursos,
  getCursoById,
  getBlocos,
  getBlocoById,
  getAnos,
  getAnoById,
  getSearchGrade,
  createGrade,
  updateGrade,
  deleteGrade,
  createDisciplinas,
  createSalas,
  createSemestres,
};
