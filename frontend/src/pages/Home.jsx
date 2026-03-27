import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import NewsCard from "../components/NewsCard";
import { obtenerNoticias } from "../services/api";

function Home() {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const cargarNoticias = async () => {
      const data = await obtenerNoticias();
      setNoticias(data);
    };

    cargarNoticias();
  }, []);

  return (
    <>
      <Hero />
      <div className="container py-5">
        <h2 className="mb-4">Últimas noticias</h2>
        <div className="row g-4 justify-content-center">
          {noticias.length > 0 ? (
            noticias.map((noticia) => (
              <NewsCard key={noticia.id} noticia={noticia} />
            ))
          ) : (
            <p>No hay noticias disponibles.</p>
          )}
        </div>
      </div>
    </>
  );
}

export default Home;