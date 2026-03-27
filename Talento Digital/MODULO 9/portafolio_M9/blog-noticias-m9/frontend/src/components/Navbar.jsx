import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          Blog Noticias
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link" href="#tecnologia">Tecnología</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#deportes">Deportes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#politica">Política</a>
            </li>
          </ul>
          
         <div className="d-flex gap-2">
  <Link className="btn btn-primary" to="/crear-noticia">
    Publicar
  </Link>
  <Link className="btn btn-outline-light" to="/login">
    Login
  </Link>
  <Link className="btn btn-warning" to="/registro">
    Registro
  </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;