import express from "express";
const router = express.Router();

import {getEventos, getEventoById,updateEvento, createEvento} from '../controllers/eventoController.js'

router.route("/").get(getEventos).post(createEvento)
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/:id").get(getEventoById).put( updateEvento)

// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public


export default router;
