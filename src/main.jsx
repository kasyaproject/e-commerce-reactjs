import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./page/home.jsx";
import LoginPage from "./page/login-page.jsx";
import ErrorPage from "./page/error-page.jsx";
import ProdukPage from "./page/produk.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/produk",
    element: <ProdukPage />,
  },
  {
    path: "/produk/:produkId",
    element: <ProdukPage />,
  },
  {
    path: "/etalase/:produkI",
    element: <ProdukPage />,
  },
  {
    path: "/promo/:promoId",
    element: <ProdukPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
