import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import API from "../services/api";

export default function Cart(){

  const {cart,increase,decrease,removeFromCart} =
  useContext(CartContext);

  const total = cart.reduce(
    (sum,item)=> sum + item.price * item.quantity,
    0
  );

  const checkout = async () => {

    const order = {
      userId:1,
      items:cart.map(item=>({
        productId:item.id,
        quantity:item.quantity
      }))
    };

    try{

      await API.post("/orders",order);

      alert("Order placed successfully");

      window.location="/";

    }catch(err){

      alert("Order failed");

    }

  };

  return(

    <div className="max-w-5xl mx-auto p-8">

      <h2 className="text-3xl font-bold mb-6">
        Your Cart
      </h2>

      {cart.length === 0 && (

        <p className="text-gray-500">
          Cart is empty
        </p>

      )}

      {cart.map(item => (

        <div
          key={item.id}
          className="flex justify-between items-center border-b py-4"
        >

          <div>

            <h3 className="font-semibold text-lg">
              {item.name}
            </h3>

            <p className="text-gray-500">
              ₹{item.price}
            </p>

          </div>

          <div className="flex items-center gap-3">

            <button
              onClick={()=>decrease(item.id)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              onClick={()=>increase(item.id)}
              className="bg-gray-200 px-3 py-1 rounded"
            >
              +
            </button>

          </div>

          <div className="font-semibold">

            ₹{item.price * item.quantity}

          </div>

          <button
            onClick={()=>removeFromCart(item.id)}
            className="text-red-500"
          >
            Remove
          </button>

        </div>

      ))}

      {cart.length > 0 && (

        <div className="mt-8">

          <div className="flex justify-between text-xl font-bold mb-4">

            <span>Total</span>

            <span>₹{total}</span>

          </div>

          <button
            onClick={checkout}
            className="bg-green-500 text-white px-6 py-3 rounded hover:bg-green-600"
          >
            Checkout
          </button>

        </div>

      )}

    </div>

  );
}