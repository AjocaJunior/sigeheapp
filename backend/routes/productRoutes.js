import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// @desc        Fetch all products
// @routes      GET /api/products
// @access      Public
router.route("/").get(getProducts);

// @desc        Single product
// @routes      GET /api/products/:id
// @access      Public
router.route("/:id").get(getProductById);

export default router;
