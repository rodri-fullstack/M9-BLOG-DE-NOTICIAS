const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/authRoutes");
const noticiaRoutes = require("./routes/noticiaRoutes");
const comentarioRoutes = require("./routes/comentarioRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ mensaje: "Backend del blog funcionando" });
});

app.use("/api/auth", authRoutes);
app.use("/api/noticias", noticiaRoutes);
app.use("/api/comentarios", comentarioRoutes);

module.exports = app;