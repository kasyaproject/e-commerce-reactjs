import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "semantic-ui-css/semantic.min.css";
import HomePage from "./page/home.jsx";
import LoginPage from "./page/login-page.jsx";
import ErrorPage from "./page/error-page.jsx";
import ProdukPage from "./page/produk.jsx";
import EtalasePage from "./page/etalase.jsx";
import PromoPage from "./page/promo.jsx";
import KeranjangPage from "./page/keranjang.jsx";
import WishlistPage from "./page/wishlist.jsx";

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
    path: "/keranjang",
    element: <KeranjangPage />,
  },
  {
    path: "/wishlist",
    element: <WishlistPage />,
  },
  {
    path: "/produk/:produkId",
    element: <ProdukPage />,
  },
  {
    path: "/etalase/:etalaseId",
    element: <EtalasePage />,
  },
  {
    path: "/promo/:promoId",
    element: <PromoPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
