# Blog Noticias - Proyecto Final Módulo 9

Aplicación web full stack de un **blog de noticias** desarrollada como proyecto final del Módulo 9.  
Permite el **registro e inicio de sesión de usuarios**, la **publicación de noticias**, la visualización del **detalle de cada noticia** y la creación de **comentarios** asociados.

## Funcionalidades principales

- Registro de usuarios
- Login de usuarios con JWT
- Contraseñas encriptadas con bcrypt
- Crear noticias
- Listar noticias ordenadas de la más reciente a la más antigua
- Ver detalle de una noticia
- Crear comentarios en noticias
- Listar comentarios por noticia
- Interfaz frontend construida con React, Vite y Bootstrap

## Tecnologías utilizadas

### Frontend
- React
- Vite
- React Router DOM
- Bootstrap
- JavaScript

### Backend
- Node.js
- Express
- PostgreSQL
- bcrypt
- jsonwebtoken
- dotenv
- cors

### Base de datos
- PostgreSQL

## Estructura del proyecto

```bash
blog-noticias-m9/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── controllers/
│   │   │   ├── authController.js
│   │   │   ├── noticiaController.js
│   │   │   └── comentarioController.js
│   │   ├── routes/
│   │   │   ├── authRoutes.js
│   │   │   ├── noticiaRoutes.js
│   │   │   └── comentarioRoutes.js
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── NewsCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── NewsDetail.jsx
│   │   │   └── CreateNews.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md