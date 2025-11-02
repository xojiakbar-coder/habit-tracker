import MainLayout from "@/layouts/Main";
import { Navigate, RouteObject } from "react-router-dom";

const getRoutesData = (): RouteObject[] => [
  {
    element: <MainLayout />,
    children: [
      {
        index: true,
        async lazy() {
          const { Home } = await import("@/pages/Home");

          return { Component: Home };
        },
      },
      {
        path: "/contact",
        async lazy() {
          const { Contact } = await import("@/pages/Contact");

          return { Component: Contact };
        },
      },
      {
        path: "*",
        element: <Navigate to="/" />,
      },
    ],
  },
];

export default getRoutesData;
