const router = require("express").Router();
const inventoryRoutes = require("./inventoryRouter");

// inventory routes
router.use("/inventory", inventoryRoutes);

module.exports = router;
