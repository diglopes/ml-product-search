if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const routes = require("./routes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`>> Server running on port ${process.env.PORT}`);
});
