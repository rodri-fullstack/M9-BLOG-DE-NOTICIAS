require("dotenv").config();
const pool = require("./config/db");

async function testConnection() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Conexión exitosa:", result.rows[0]);
  } catch (error) {
    console.error("Error de conexión:", error.message);
  } finally {
    pool.end();
  }
}

testConnection();