const express = require("express");
const router = express.Router();
const {
  createSupplier,
  getSuppliers,
  updateSupplier,
  deleteSupplier,
} = require("../controllers/supplierController");

router.post("/create", createSupplier);
router.get("/", getSuppliers);
router.put("/:supplierId", updateSupplier);
router.delete("/:supplierId", deleteSupplier);

module.exports = router;
