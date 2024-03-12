import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Principal } from "./pages/principal";
import { Events } from "./pages/events";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Principal />,
    },
    {
        path: "/events",
        element: <Events />,
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