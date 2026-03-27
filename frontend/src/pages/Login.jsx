import { useState } from "react";
import { loginUsuario } from "../services/api";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
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
    const data = await loginUsuario(form);

    if (data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("usuario", JSON.stringify(data.usuario));
      setMensaje("Login exitoso");
    } else {
      setMensaje(data.mensaje || "Error al iniciar sesión");
    }
  };

  return (
    <div className="container py-5" style={{ maxWidth: "500px" }}>
      <h2 className="mb-4">Iniciar sesión</h2>

      <form onSubmit={handleSubmit} className="card card-body shadow-sm">
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            type="password"
            name="password"
            className="form-control"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-dark">
          Ingresar
        </button>
      </form>

      {mensaje && <p className="mt-3">{mensaje}</p>}
    </div>
  );
}

export default Login;