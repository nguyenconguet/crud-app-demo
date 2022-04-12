const router = require("express").Router();
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const swaggerDefinition = require("../../docs/swaggerDef");

const specs = swaggerJsdoc({
  swaggerDefinition,
  apis: ["./docs/*.yaml", `./routes/v1/*.js`]
});

router.use("/", swaggerUi.serve);

router.get("/", swaggerUi.setup(specs));

module.exports = router;
