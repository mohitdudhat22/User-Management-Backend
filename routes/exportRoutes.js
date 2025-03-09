const express = require("express");
const { exportUsersCsv, exportUsersExcel, exportUsersPdf, exportRolesCsv, exportRolesExcel, exportRolesPdf } = require("../controllers/exportController");
const { protect } = require("../middleware/auth");
const { route } = require("./authRoutes");

const router = express.Router();

router.use(protect);

router.get('/users/csv', exportUsersCsv);
router.get('/users/excel', exportUsersExcel);
router.get('/users/pdf', exportUsersPdf);

router.get('/roles/csv', exportRolesCsv);
router.get('/roles/excel', exportRolesExcel);
router.get('/roles/pdf', exportRolesPdf);

module.exports = router; 