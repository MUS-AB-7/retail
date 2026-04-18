import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({product}){

  const {addToCart} = useContext(CartContext);

  return(

    <div className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1">

      {/* <img
        src={`https://source.unsplash.com/400x300/?food`}
        className="w-full h-40 object-cover"
      /> */}

      <div className="p-4">

        <h3 className="text-lg font-semibold">
          {product.name}
        </h3>

        <p className="text-gray-500 mb-3">
          ₹{product.price}
        </p>

        <button
          onClick={()=>addToCart(product)}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Add To Cart
        </button>

      </div>

    </div>

  );
}