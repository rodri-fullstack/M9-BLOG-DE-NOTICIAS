const pool = require("../config/db");

const crearComentario = async (req, res) => {
  const { contenido, usuario_id, noticia_id } = req.body;

  try {
    if (!contenido || !usuario_id || !noticia_id) {
      return res.status(400).json({
        mensaje: "Todos los campos son obligatorios",
      });
    }

    const result = await pool.query(
      `INSERT INTO comentarios (contenido, usuario_id, noticia_id)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [contenido, usuario_id, noticia_id]
    );

    res.status(201).json({
      mensaje: "Comentario creado correctamente",
      comentario: result.rows[0],
    });
  } catch (error) {
    console.error("ERROR CREAR COMENTARIO:", error);
    res.status(500).json({
      mensaje: "Error al crear comentario",
      error: error.message,
    });
  }
};

const obtenerComentariosPorNoticia = async (req, res) => {
  const { noticiaId } = req.params;

  try {
    const result = await pool.query(
      `SELECT comentarios.*, usuarios.nombre AS autor
       FROM comentarios
       INNER JOIN usuarios ON comentarios.usuario_id = usuarios.id
       WHERE comentarios.noticia_id = $1
       ORDER BY comentarios.fecha_creacion DESC`,
      [noticiaId]
    );

    res.json(result.rows);
  } catch (error) {
    console.error("ERROR OBTENER COMENTARIOS:", error);
    res.status(500).json({
      mensaje: "Error al obtener comentarios",
      error: error.message,
    });
  }
};

module.exports = {
  crearComentario,
  obtenerComentariosPorNoticia,
};