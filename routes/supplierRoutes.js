const express = require("express");
const { protect } = require("../middleware/auth");
const checkPermission = require("../middleware/checkPermission");
const {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier
} = require("../controllers/supplierController");

const router = express.Router();

router.use(protect);

router.post("/", checkPermission('supplier.create'), createSupplier);
router.get("/", checkPermission('supplier.read'), getAllSuppliers);
router.get("/:id", checkPermission('supplier.read'), getSupplierById);
router.put("/:id", checkPermission('supplier.update'), updateSupplier);
router.delete("/:id", checkPermission('supplier.delete'), deleteSupplier);

module.exports = router; 