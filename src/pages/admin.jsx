import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la llamada Axios para enviar datos al servidor
      const response = await axios.post(
        "http://127.0.0.1:8000/api/login",
        formData
      );

      // Verifica si existe un token en la respuesta de la API
      if (response.data.data.token) {
        // Si hay un token, almacénalo en el localStorage del navegador
        localStorage.setItem("token", response.data.data.token);

        // Redirige al usuario a la página principal
        return navigate("/");
      }


      // Manejar la respuesta del servidor según sea necesario
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      // Manejar errores en la llamada Axios
      console.error("Error al enviar datos:", error);
    }
  };

  return (
    <div className="shadow w-50 p-3 d-flex justify-content-center m-auto mt-5 border border-3 border-secondary-subtle rounded">
    <form onSubmit={handleSubmit}>
      <div>
        <label className="form-label">Email:</label>
        <input
          type="email"
          name="email"
          class="form-control"
          value={formData.email}
          onChange={handleFormChange}
          required
        />
      </div>
      <div>
        <label className="form-label">Password:</label>
        <input
          type="password"
          name="password"
          class="form-control"
          value={formData.password}
          onChange={handleFormChange}
          required
        />
      </div>
      <div>
        <button type="submit" className="mt-3 btn btn-outline-success">Iniciar sesión</button>
      </div>
    </form>
    </div>
  );
}

export default Admin;