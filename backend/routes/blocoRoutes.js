import express from "express";
const router = express.Router();
import {getBlocos, getBlocoById, createSalas} from '../controllers/cursoblocoanoController.js'

router.route("/").get(getBlocos)
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/:id").get(getBlocoById)
router.route("/:id/salas").post(createSalas)
// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public


export default router;
