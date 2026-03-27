import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { crearNoticia } from "../services/api";

function CreateNews() {
  const navigate = useNavigate();
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  const [form, setForm] = useState({
    titulo: "",
    contenido: "",
    categoria: "",
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!usuario) {
      setMensaje("Debes iniciar sesión para publicar una noticia");
      return;
    }

    const nuevaNoticia = {
      ...form,
      usuario_id: usuario.id,
    };

    const data = await crearNoticia(nuevaNoticia);

    if (data.noticia) {
      setMensaje("Noticia publicada correctamente");
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setMensaje(data.mensaje || "Error al publicar noticia");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: "700px" }}>
      <h2 className="mb-4">Crear noticia</h2>

      <form onSubmit={handleSubmit} className="card card-body shadow-sm">
        <div className="mb-3">
          <label className="form-label">Título</label>
          <input
            type="text"
            name="titulo"
            className="form-control"
            value={form.titulo}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contenido</label>
          <textarea
            name="contenido"
            className="form-control"
            rows="5"
            value={form.contenido}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label">Categoría</label>
          <select
            name="categoria"
            className="form-select"
            value={form.categoria}
            onChange={handleChange}
          >
            <option value="">Selecciona una categoría</option>
            <option value="Tecnología">Tecnología</option>
            <option value="Deportes">Deportes</option>
            <option value="Política">Política</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Publicar noticia
        </button>
      </form>

      {mensaje && <p className="mt-3">{mensaje}</p>}
    </div>
  );
}

export default CreateNews;