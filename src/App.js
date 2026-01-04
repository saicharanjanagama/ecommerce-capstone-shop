import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, Suspense, lazy } from "react";

import GlobalStyles from "./styles/GlobalStyles";
import Navbar from "./components/Navbar/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import SkeletonGrid from "./components/Skeleton/SkeletonGrid";

// Lazy loaded pages
const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const OrdersPage = lazy(() => import("./pages/OrdersPage"));

function App() {
  const [category, setCategory] = useState("all");

  return (
    <BrowserRouter>
      <GlobalStyles />
      <Navbar category={category} setCategory={setCategory} />

      <Suspense fallback={<SkeletonGrid />}>
        <Routes>
          <Route path="/" element={<Home category={category} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />

          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
