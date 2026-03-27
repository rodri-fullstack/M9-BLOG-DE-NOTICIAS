import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  obtenerNoticiaPorId,
  obtenerComentariosPorNoticia,
  crearComentario,
} from "../services/api";

function NewsDetail() {
  const { id } = useParams();
  const [noticia, setNoticia] = useState(null);
  const [comentarios, setComentarios] = useState([]);
  const [contenido, setContenido] = useState("");

  useEffect(() => {
    const cargarDetalle = async () => {
      const dataNoticia = await obtenerNoticiaPorId(id);
      const dataComentarios = await obtenerComentariosPorNoticia(id);

      setNoticia(dataNoticia);
      setComentarios(dataComentarios);
    };

    cargarDetalle();
  }, [id]);

  const handleComentario = async (e) => {
    e.preventDefault();

    const usuario = JSON.parse(localStorage.getItem("usuario"));

    if (!usuario) {
      alert("Debes iniciar sesión para comentar");
      return;
    }

    const nuevoComentario = {
      contenido,
      usuario_id: usuario.id,
      noticia_id: Number(id),
    };

    await crearComentario(nuevoComentario);

    const dataComentarios = await obtenerComentariosPorNoticia(id);
    setComentarios(dataComentarios);
    setContenido("");
  };

  if (!noticia) {
    return <div className="container py-5">Cargando noticia...</div>;
  }

  return (
    <div className="container py-5">
      <span className="badge bg-primary mb-3">{noticia.categoria}</span>
      <h1>{noticia.titulo}</h1>
      <p className="text-muted">Autor: {noticia.autor}</p>
      <p className="mt-4">{noticia.contenido}</p>

      <hr className="my-5" />

      <h3>Comentarios</h3>

      <form onSubmit={handleComentario} className="mb-4">
        <textarea
          className="form-control mb-3"
          rows="3"
          placeholder="Escribe tu comentario"
          value={contenido}
          onChange={(e) => setContenido(e.target.value)}
        ></textarea>
        <button className="btn btn-dark" type="submit">
          Comentar
        </button>
      </form>

      {comentarios.length > 0 ? (
        comentarios.map((comentario) => (
          <div key={comentario.id} className="card mb-3 shadow-sm">
            <div className="card-body">
              <p className="mb-1">{comentario.contenido}</p>
              <small className="text-muted">Por: {comentario.autor}</small>
            </div>
          </div>
        ))
      ) : (
        <p>No hay comentarios todavía.</p>
      )}
    </div>
  );
}

export default NewsDetail;