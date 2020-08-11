const express = require("express");
const path = require("path");
const app = express();
const db = require(path.resolve(__dirname, "./models/index.js"));
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const apiRoutes = require(path.resolve(__dirname, "./routes/apiRoutes"));
app.use("/api", apiRoutes);

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
  });
});
