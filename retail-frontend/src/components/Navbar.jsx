import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar(){

  const {cart} = useContext(CartContext);

  const token = localStorage.getItem("token");

  const logout = () => {

    localStorage.removeItem("token");
    window.location.href="/";

  };

  return(

    <div className="bg-white shadow-md px-8 py-4 flex justify-between items-center">

      <Link to="/" className="text-2xl font-bold text-red-500">
        FoodHub
      </Link>

      <div className="flex gap-6 items-center">

        <Link to="/">Menu</Link>

        {token ? (

          <button
            onClick={logout}
            className="text-red-500"
          >
            Logout
          </button>

        ) : (

          <Link to="/login">
            Login
          </Link>

        )}

        <Link to="/cart" className="relative">

          <FaShoppingCart size={22}/>

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
            {cart.length}
          </span>

        </Link>

      </div>

    </div>

  );
}