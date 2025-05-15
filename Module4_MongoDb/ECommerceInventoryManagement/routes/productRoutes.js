const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/create", createProduct);
router.get("/", getProducts);
router.put("/:productId", updateProduct);
router.delete("/:productId", deleteProduct);

module.exports = router;
