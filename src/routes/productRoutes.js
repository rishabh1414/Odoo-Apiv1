import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductById,
  getProductFields,
  getProductTypeValues,
  listProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/products/fields", getProductFields);
router.get("/product/type-values", getProductTypeValues);
router.get("/products", listProducts);
router.get("/products/:id", getProductById);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
