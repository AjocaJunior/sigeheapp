import express from "express";
const router = express.Router();
import {getAnos, getAnoById, createSemestres} from '../controllers/cursoblocoanoController.js'

router.route("/").get(getAnos)
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/:id").get(getAnoById)
router.route("/:id/semestre").post(createSemestres)
// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public


export default router;
