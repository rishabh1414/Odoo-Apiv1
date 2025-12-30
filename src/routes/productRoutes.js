import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductFields,
  getProductTypeValues,
  listProducts,
  updateProduct,
} from "../controllers/productController.js";

const router = Router();

router.get("/products/fields", getProductFields);
router.get("/product/type-values", getProductTypeValues);
router.get("/products", listProducts);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

export default router;
