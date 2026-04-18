import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import CartProvider from "./context/CartContext";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

  return (

    <CartProvider>

      <Navbar />

      <Routes>

        <Route path="/" element={<Products />} />

        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/success" element={<OrderSuccess />} />
      </Routes>

    </CartProvider>

  );
}

export default App;