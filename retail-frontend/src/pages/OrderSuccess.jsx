import { Link } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

export default function OrderSuccess(){

  return(

    <div className="flex flex-col items-center justify-center h-[80vh]">

      <FaCheckCircle className="text-green-500 text-7xl mb-6"/>

      <h2 className="text-3xl font-bold mb-2">
        Order Placed Successfully!
      </h2>

      <p className="text-gray-500 mb-6">
        Your delicious food is being prepared.
      </p>

      <Link
        to="/"
        className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition"
      >
        Back to Menu
      </Link>

    </div>

  );
}