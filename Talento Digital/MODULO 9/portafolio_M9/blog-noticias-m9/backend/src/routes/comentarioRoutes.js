const express = require("express");
const router = express.Router();
const {
  crearComentario,
  obtenerComentariosPorNoticia,
} = require("../controllers/comentarioController");

router.post("/", crearComentario);
router.get("/noticia/:noticiaId", obtenerComentariosPorNoticia);

module.exports = router;