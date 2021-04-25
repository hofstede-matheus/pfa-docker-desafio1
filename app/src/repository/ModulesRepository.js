const connection = require("../database");

async function getAllModules() {
  const rows = await connection.query("SELECT * FROM mudules;");

  console.log(rows);

  return {
    modules: rows,
  };
}

module.exports = { getAllModules };
