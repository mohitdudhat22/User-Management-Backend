const express = require("express");
const { protect } = require("../middleware/auth");
const checkPermission = require("../middleware/checkPermission");
const {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  updateCustomer,
  deleteCustomer
} = require("../controllers/customerController");

const router = express.Router();

router.use(protect);

router.post("/", checkPermission('customer.create'), createCustomer);
router.get("/", checkPermission('customer.read'), getAllCustomers);
router.get("/:id", checkPermission('customer.read'), getCustomerById);
router.put("/:id", checkPermission('customer.update'), updateCustomer);
router.delete("/:id", checkPermission('customer.delete'), deleteCustomer);

module.exports = router; 