const express = require("express");
const app = express();
const { getAllModules } = require("./repository/ModulesRepository");

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hoi :D" });
});

app.get("/module", (_, res) => {
  const modules = getAllModules();
  res.status(200).json(modules);
});

app.listen(3000, () => {
  console.log("Running on port 3000");
});
