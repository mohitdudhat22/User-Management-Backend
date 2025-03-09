const express = require("express");
const { protect } = require("../middleware/auth");
const checkPermission = require("../middleware/checkPermission");
const {
  createSupplier,
  getAllSuppliers,
  getSupplierById,
  updateSupplier,
  deleteSupplier,
  deleteMultipleSuppliers
} = require("../controllers/supplierController");
const paginate = require("../middleware/paginate");

const router = express.Router();

// Protect all supplier routes
router.use(protect);

// CRUD routes with permission checks
router.post("/", checkPermission('can_create'), createSupplier);
router.get("/", checkPermission('can_read'), paginate(), getAllSuppliers);
router.get("/:id", checkPermission('can_read'), getSupplierById);
router.put("/:id", checkPermission('can_update'), updateSupplier);
router.delete("/:id", checkPermission('can_delete'), deleteSupplier);
router.delete("/", checkPermission('can_delete'), deleteMultipleSuppliers);

module.exports = router; 