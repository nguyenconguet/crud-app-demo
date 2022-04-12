const appConfig = {
  API_VERSION: process.env.API_VERSION,
  PORT: process.env.PORT || 3000
};

const DBConfig = {
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS
};

module.exports = { appConfig, DBConfig };
