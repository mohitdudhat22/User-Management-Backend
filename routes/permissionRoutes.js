const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/auth');
const isAdmin = require('../middleware/isAdmin');
const {
  getAllPermissions,
  updatePermission,
  createPermission,
  deletePermission
} = require('../controllers/permissionController');

// Protect all permission routes and ensure admin access
router.use(protect);
router.use(isAdmin);

router.get('/', getAllPermissions);
router.post('/', createPermission);
router.put('/:id', updatePermission);
router.delete('/:id', deletePermission);

module.exports = router; 