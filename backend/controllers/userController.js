import asyncHandler from "express-async-handler";
import Docente from "../models/docenteModel.js";
import generateToken from "../utils/generateToken.js";

// @desc        Auth user & get token
// @routes      POST /api/users/ogin
// @access      Public
const authDocente = asyncHandler(async (req, res) => {
  const { codigo, password } = req.body;
  const docente = await Docente.findOne({ codigo });

  if (docente && (await docente.matchPassword(password))) {
    res.json({
      _id: docente._id,
      name: docente.name,
      codigo: docente.codigo,
      email: docente.email,
      contacto:docente.contacto,
      isAdmin: docente.isAdmin,
      token: generateToken(docente._id),
    });
  } else {
    res.status(401);
    throw new Error("Código ou password Inválido");
  }

  //   res.send({ email, password });
});

// @desc        Register a New User
// @routes      POST /api/users
// @access      Public
const registerDocente = asyncHandler(async (req, res) => {
  const { codigo, name, email,contacto, password } = req.body;
  const docenteExists = await Docente.findOne({ email });

  if (docenteExists) {
    res.status(400);
    throw new Error("Docente already exists");
  }
  const docente = await Docente.create({
    codigo,
    name,
    email,
    contacto,
    password,
  });
  if (docente) {
    res.status(201).json({
      _id: docente._id,
      codigo: docente.codigo,
      name: docente.name,
      email: docente.email,
      contacto:docente.contacto,
      isAdmin: docente.isAdmin,
      token: generateToken(docente._id),
    });
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
  //   res.send({ email, password });
});

// @desc        GET user profile
// @routes      GET /api/users/profile
// @access      Private
const getDocenteProfile = asyncHandler(async (req, res) => {
  const docente = await Docente.findById(req.docente._id);

  if (docente) {
    res.json({
      _id: docente._id,
      codigo: docente.codigo,
      name: docente.name,
      email: docente.email,
      contacto:docente.contacto,
      isAdmin: docente.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
});

const getDocenteById = asyncHandler(async (req, res) => {
  const docente = await Docente.findById(req.params.id);
  if (docente) {
    res.json(docente);
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
});

// @desc        UPDATE user profile
// @routes      PUT /api/users/profile
// @access      Private
const updateDocenteProfile = asyncHandler(async (req, res) => {
  const docente = await Docente.findById(req.docente._id);

  if (docente) {
    docente.name = req.body.name || docente.name;
    docente.email = req.body.email || docente.email;

    if (req.body.password) {
      docente.password = req.body.password;
    }
    const updatedDocente = await docente.save();
    res.json({
      _id: updatedDocente._id,
      name: updatedDocente.name,
      email: updatedDocente.email,
      contacto:updatedDocente.contacto,
      isAdmin: updatedDocente.isAdmin,
      token: generateToken(updatedDocente._id),
    });
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
});

const updateDocenteDetail = asyncHandler(async (req, res) => {
  const { codigo, name, email, contacto, password } = req.body;

  const docente = await Docente.findById(req.params.id);

  if (docente) {
    docente.name = name;
    docente.codigo = codigo;
    docente.email = email;
    docente.contacto = contacto;
    docente.password = password;

    const updatedDocente = await docente.save();
    res.json(updatedDocente);
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
});

// @desc        GET all docentes
// @routes      GET /api/users/profile
// @access      Private
const getDocentes = asyncHandler(async (req, res) => {
  const docentes = await Docente.find({});
  res.json(docentes);
});

//APAGAR GRADE
const deleteDocente = asyncHandler(async (req, res) => {
  const docente = await Docente.findById(req.params.id);
  if (docente) {
    await docente.remove();
    res.json({ message: "Docente Apagado" });
  } else {
    res.status(404);
    throw new Error("Docente não encontrado");
  }
});

export {
  authDocente,
  registerDocente,
  getDocenteProfile,
  updateDocenteProfile,
  getDocentes,
  deleteDocente, getDocenteById, updateDocenteDetail
};
