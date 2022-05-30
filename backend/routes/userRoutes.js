import express from "express";
const router = express.Router();
import {
  authDocente,
  registerDocente,
  getDocenteProfile,
  updateDocenteProfile,
  getDocentes, deleteDocente, getDocenteById, updateDocenteDetail
} from "../controllers/userController.js";
import { protect,admin } from "../middleware/authMiddleware.js";
// @desc        Fetch all products
// @routes      GET /api/products
// @access      Public

router.route("/").post(registerDocente).get(protect,admin, getDocentes);
router.post("/login", authDocente);
router
  .route("/profile")
  .get(protect, getDocenteProfile)
  .put(protect, updateDocenteProfile);

router.route("/:id").delete(protect, admin, deleteDocente).get(getDocenteById).put(protect,updateDocenteDetail)

export default router;
