import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Principal } from "./pages/principal";
import { Events } from "./pages/events";
import { Services } from "./pages/services";
import { Contact } from "./pages/contact";
import Admin from "./pages/admin";

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
        element: <Services />,
      },
    {
        path: "/contact",
        element: <Contact />,
    },
    {
        path: "/admin",
        element: < Admin />,
    },
  ]);