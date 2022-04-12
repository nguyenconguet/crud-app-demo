const express = require("express");
const cors = require("cors");

const app = express();

require("dotenv").config();

const { appConfig } = require("./configs/config");
const { connectDB } = require("./utils/connection");
const routes = require("./routes/v1/index");

const PORT = appConfig.PORT;

app.use(cors());
app.use(express.json());

// connect DB
connectDB();

// Routes
app.use(`/api/${appConfig.API_VERSION}`, routes);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
