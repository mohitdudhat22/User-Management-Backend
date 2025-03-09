const express = require("express");
const { protect } = require("../middleware/auth");
const checkPermission = require("../middleware/checkPermission");
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer,
  deleteMultipleCustomers
} = require("../controllers/customerController");
const paginate = require("../middleware/paginate");

const router = express.Router();

// Protect all customer routes
router.use(protect);

// CRUD routes with permission checks
router.post("/", checkPermission('can_create'), createCustomer);
router.get("/", checkPermission('can_read'), paginate(), getAllCustomers);
router.get("/:id", checkPermission('can_read'), getCustomerById);
router.put("/:id", checkPermission('can_update'), updateCustomer);
router.delete("/:id", checkPermission('can_delete'), deleteCustomer);
router.delete("/", checkPermission('can_delete'), deleteMultipleCustomers);

module.exports = router; 