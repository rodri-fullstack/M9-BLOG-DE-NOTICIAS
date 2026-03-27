const pool = require("../config/db");

const crearNoticia = async (req, res) => {
  const { titulo, contenido, categoria, usuario_id } = req.body;

  try {
    if (!titulo || !contenido || !categoria || !usuario_id) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
      });
    }

    const result = await pool.query(
      `INSERT INTO noticias (titulo, contenido, categoria, usuario_id)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [titulo, contenido, categoria, usuario_id]
    );

    res.status(201).json({
      mensaje: "Noticia creada correctamente",
      noticia: result.rows[0],
    });
  } catch (error) {
    console.error("ERROR CREAR NOTICIA:", error);
    res.status(500).json({
      mensaje: "Error al crear noticia",
      error: error.message,
    });
  }
};

const obtenerNoticias = async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT noticias.*, usuarios.nombre AS autor
       FROM noticias
       INNER JOIN usuarios ON noticias.usuario_id = usuarios.id
       ORDER BY noticias.fecha_creacion DESC`
    );

    res.json(result.rows);
  } catch (error) {
    console.error("ERROR OBTENER NOTICIAS:", error);
    res.status(500).json({
      mensaje: "Error al obtener noticias",
      error: error.message,
    });
  }
};

const obtenerNoticiaPorId = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      `SELECT noticias.*, usuarios.nombre AS autor
       FROM noticias
       INNER JOIN usuarios ON noticias.usuario_id = usuarios.id
       WHERE noticias.id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        mensaje: "Noticia no encontrada",
      });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("ERROR OBTENER NOTICIA:", error);
    res.status(500).json({
      mensaje: "Error al obtener noticia",
      error: error.message,
    });
  }
};

module.exports = {
  crearNoticia,
  obtenerNoticias,
  obtenerNoticiaPorId,
};