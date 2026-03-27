import { Link } from "react-router-dom";

function NewsCard({ noticia }) {
  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <span className="badge bg-primary mb-2">{noticia.categoria}</span>
          <h5 className="card-title">{noticia.titulo}</h5>
          <p className="card-text">
            {noticia.contenido.length > 120
              ? noticia.contenido.slice(0, 120) + "..."
              : noticia.contenido}
          </p>
          <p className="text-muted small mb-2">Autor: {noticia.autor}</p>
          <Link to={`/noticias/${noticia.id}`} className="btn btn-dark">
            Ver detalle
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;