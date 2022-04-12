const { appConfig } = require("../configs/config");

const swaggerDef = {
  openapi: "3.0.0",
  info: {
    title: "CRUD app API docmentation",
    version: `${appConfig.API_VERSION}`
  },
  servers: [
    {
      url: `http://localhost:${appConfig.PORT}/api/${appConfig.API_VERSION}`
    }
  ]
};

module.exports = swaggerDef;
