import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";

export default function Register(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const [message,setMessage] = useState("");

  const register = async () => {

    try{

      await API.post("/auth/register",{
        name,
        email,
        password
      });

      setMessage("Registration successful");

      setTimeout(()=>{
        navigate("/login");
      },1500);

    }catch(err){

      setMessage("Registration failed");

    }

  };

  return(

    <div className="flex justify-center items-center h-[80vh]">

      <div className="bg-white shadow-xl p-8 rounded-lg w-96">

        <h2 className="text-3xl font-bold text-center mb-6">
          Register
        </h2>

        {message && (
          <p className="text-green-500 text-sm mb-3">
            {message}
          </p>
        )}

        <input
          placeholder="Name"
          className="w-full border p-3 rounded mb-3"
          onChange={e=>setName(e.target.value)}
        />

        <input
          placeholder="Email"
          className="w-full border p-3 rounded mb-3"
          onChange={e=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          onChange={e=>setPassword(e.target.value)}
        />

        <button
          onClick={register}
          className="w-full bg-green-500 text-white py-3 rounded hover:bg-green-600 transition"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4">

          Already have an account?

          <Link
            to="/login"
            className="text-green-500 ml-1"
          >
            Login
          </Link>

        </p>

      </div>

    </div>
  );
}