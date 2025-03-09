const express = require("express");
const { User, Role } = require("../models");
const { createUser, getAllUsers, updateUser, deleteUser, uploadFiles, deleteMultipleUsers } = require("../controllers/userController");
const { validateUser, validate } = require("../middleware/validate");
const { upload, handleUploadError } = require("../middleware/upload");
const { protect } = require("../middleware/auth");
const { createUserSchema, updateUserSchema } = require("../validations/userValidation");
const paginate = require("../middleware/paginate");
const { attachRole, detachRole, getUserRoles } = require("../controllers/roleController");

const router = express.Router();

router.use(protect);

router.get("/", paginate(), getAllUsers);

router.post("/upload", 
  upload.array('files', 5),
  handleUploadError,
  uploadFiles
);

router.post("/", 
  upload.array('files', 5),
  handleUploadError,
  // validate(createUserSchema),
  createUser
);

router.put("/:id", 
  upload.array('files', 5),
  handleUploadError,
  // validate(updateUserSchema),
  updateUser
);

router.delete("/:id", deleteUser);

router.post("/delete-multiple", deleteMultipleUsers);

router.post("/roles/attach", attachRole);
router.post("/roles/detach", detachRole);
router.get("/roles", getUserRoles);

module.exports = router; 