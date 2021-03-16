const router = require("express").Router();
const inventoryRoutes = require("./inventoryRouter");
const transactionRoute = require('./transactionRouter');

router.use("/inventory", inventoryRoutes);

router.use("/transaction", transactionRoute);

module.exports = router;
