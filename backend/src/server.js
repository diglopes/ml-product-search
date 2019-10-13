if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`>> Server running on port ${process.env.PORT}`);
});
