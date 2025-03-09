const express = require("express");
const { 
  getAllRoles,
  getRole,
  createRole,
  updateRole,
  deleteRole,
  attachRole,
  detachRole,
  getUserRoles
} = require("../controllers/roleController");
const { validateRole, validateUserRole } = require("../middleware/roleValidate");
const { protect } = require("../middleware/auth");  
const router = express.Router();

// Protect all role routes
router.use(protect);

// Role CRUD routes
router.get("/", getAllRoles);
router.get("/:roleId", getRole);
router.post("/", validateRole, createRole);
router.put("/:roleId", validateRole, updateRole);
router.delete("/:roleId", deleteRole);

// User-Role association routes
router.post("/users/attach", validateUserRole, attachRole);
router.delete("/users/detach", validateUserRole, detachRole);
router.get("/users/roles", getUserRoles);

module.exports = router; 