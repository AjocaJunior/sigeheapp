import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import docentes from "./data/docentes.js";
import grades from "./data/grades.js";
import Docente from "./models/docenteModel.js";
import Grade from "./models/gradeModel.js";
import Bloco from "./models/blocoModel.js";
import Curso from "./models/cursoModel.js";
import Ano from "./models/anoModel.js";
import anos from "./data/ano.js";
import cursos from "./data/curso.js";
import bloco from "./data/bloco.js";
import eventos from "./data/eventos.js";
import Evento from "./models/eventoModel.js";

import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
  try {
    // await Docente.deleteMany();
    // await Grade.deleteMany();
    // await Curso.deleteMany();
    // await Bloco.deleteMany();
    // await Ano.deleteMany();

    // const createdDocentes = await Docente.insertMany(docentes);
    // await Ano.insertMany(anos);
    // await Curso.insertMany(cursos);
    // const adminUser = createdDocentes[0]._id;
    await Bloco.insertMany(bloco);
    // await Evento.insertMany(eventos);
    // const sampleGrades = grades.map((grade) => {
    //   return { ...grade, docente: adminUser };
    // });

    // await Grade.insertMany(sampleGrades);

    console.log("Dados Importados".green.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {

    await Bloco.deleteMany();
    // await Ano.deleteMany();

    console.log("Dados Apagados".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
