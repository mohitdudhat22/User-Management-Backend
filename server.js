require("dotenv").config();
const cors = require('cors');
console.log(process.env.JWT_SECRET);
const express = require("express");
const authRoutes = require("./routes/authRoutes");
const locationRoutes = require("./routes/locationRoutes");
const roleRoutes = require("./routes/roleRoutes");
const exportRoutes = require('./routes/exportRoutes');
const userRoutes = require('./routes/userRoutes');
const cleanupBlacklist = require('./jobs/cleanupBlacklist');
const cleanupSessions = require('./jobs/cleanupSessions');
const customerRoutes = require('./routes/customerRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
require('./events/eventHandlers');
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/location", locationRoutes);
app.use("/api/roles", roleRoutes);
app.use('/api/export', exportRoutes);
app.use('/api/users', userRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/suppliers', supplierRoutes);
// Start cleanup job
cleanupBlacklist();

// Run cleanup job every 24 hours
setInterval(cleanupSessions, 24 * 60 * 60 * 1000);

app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));

