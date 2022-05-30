import express from "express";
const router = express.Router();
import {getCursos, getCursoById, createDisciplinas} from '../controllers/cursoblocoanoController.js'

router.route("/").get(getCursos)
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/:id").get(getCursoById)
router.route("/:id/disciplinas").post(createDisciplinas)
// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public


export default router;
