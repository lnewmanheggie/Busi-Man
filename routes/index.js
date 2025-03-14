const path = require("path");
const router = require("express").Router();
const authRouter = require('./authRouter');
// const inventoryRoutes = require('./InventoryApi');
// const apiRoutes = require("./api");

const apiRoutes = require("./api");


// API Routes
router.use("/api", apiRoutes);

router.use('/auth', authRouter);

// router.use('/api', inventoryRoutes)


// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;