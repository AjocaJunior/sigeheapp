import express from "express";
const router = express.Router();
import {
  getGrades,
  getGradeById,getSearchGrade, deleteGrade, createGrade, updateGrade, createDias
} from "../controllers/gradeController.js";
import { protect,admin } from "../middleware/authMiddleware.js";
// @desc        Fetch all grades
// @routes      GET /api/grades
// @access      Public
router.route("/").get(getGrades).post(protect,admin, createGrade);
router.route("/:id/dias").post(protect,admin, createDias);
// @desc        Single grade
// @routes      GET /api/grades/:id
// @access      Public
router.route("/:id").get(getGradeById).delete(protect, admin, deleteGrade).put(protect,admin, updateGrade);

router.route("/?").get(getSearchGrade)

export default router;
