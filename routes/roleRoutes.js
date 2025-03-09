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
const checkPermission = require("../middleware/checkPermission");
const {
  assignPermissionToRole,
  removePermissionFromRole,
  getRolePermissions
} = require("../controllers/rolePermissionController");

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

// Permission management routes
router.post("/permissions", checkPermission('role.manage'), assignPermissionToRole);
router.delete("/permissions", checkPermission('role.manage'), removePermissionFromRole);
router.get("/:roleId/permissions", checkPermission('role.read'), getRolePermissions);

module.exports = router; 