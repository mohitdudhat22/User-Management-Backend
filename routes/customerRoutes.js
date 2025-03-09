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
router.post("/", checkPermission('customer.create'), createCustomer);
router.get("/", checkPermission('customer.read'), paginate, getAllCustomers);
router.get("/:id", checkPermission('customer.read'), getCustomerById);
router.put("/:id", checkPermission('customer.update'), updateCustomer);
router.delete("/:id", checkPermission('customer.delete'), deleteCustomer);
router.delete("/", checkPermission('customer.delete'), deleteMultipleCustomers);

module.exports = router; 