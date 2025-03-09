const express = require("express");
const { 
  getStates, 
  getCitiesByState, 
  createState, 
  createCity 
} = require("../controllers/locationController");
const { protect } = require("../middleware/auth");

const router = express.Router();

// Public routes for dropdowns
router.get("/states", getStates);
router.get("/states/:stateId/cities", getCitiesByState);

// Protected routes for creating new states and cities
router.post("/states", protect, createState);
router.post("/cities", protect, createCity);

module.exports = router;
