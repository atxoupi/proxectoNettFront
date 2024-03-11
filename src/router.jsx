import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Principal } from "./pages/principal";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
    },
    {
        path: "/aboutMe",
        element: <div>Sobre mi</div>,
      },
    {
        path: "/services",
        element: <div>Servicios</div>,
      },
    {
        path: "/contact",
        element: <div>Contacto</div>,
    },
    {
        path: "/admin",
        element: <div>Admin</div>,
    },
  ]);