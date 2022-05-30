import express from "express";
const router = express.Router();
import {getEventos, getEventoById} from '../controllers/eventoController.js'

router.route("/").get(getEventos)
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/:id").get(getEventoById)

// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public


export default router;
