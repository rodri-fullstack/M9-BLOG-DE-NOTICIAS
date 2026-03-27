const BASE_URL = "http://localhost:3000/api";

export const obtenerNoticias = async () => {
  const response = await fetch(`${BASE_URL}/noticias`);
  return response.json();
};

export const obtenerNoticiaPorId = async (id) => {
  const response = await fetch(`${BASE_URL}/noticias/${id}`);
  return response.json();
};

export const registrarUsuario = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const loginUsuario = async (data) => {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const obtenerComentariosPorNoticia = async (id) => {
  const response = await fetch(`${BASE_URL}/comentarios/noticia/${id}`);
  return response.json();
};

export const crearComentario = async (data) => {
  const response = await fetch(`${BASE_URL}/comentarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const crearNoticia = async (data) => {
  const response = await fetch(`${BASE_URL}/noticias`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};