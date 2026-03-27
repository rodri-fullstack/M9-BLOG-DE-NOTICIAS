const express = require("express");
const router = express.Router();
const {
  crearNoticia,
  obtenerNoticias,
  obtenerNoticiaPorId,
} = require("../controllers/noticiaController");

router.post("/", crearNoticia);
router.get("/", obtenerNoticias);
router.get("/:id", obtenerNoticiaPorId);

module.exports = router;