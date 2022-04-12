const router = require("express").Router();
const productRoute = require("./product.route");
const docsRoute = require("./docs.route");

router.use("/products", productRoute);

router.use("/docs", docsRoute);

module.exports = router;
