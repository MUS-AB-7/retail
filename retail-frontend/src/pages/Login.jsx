import { useState } from "react";
import API from "../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {
            navigate("/");
        }

    }, []);

    const login = async () => {

        try {

            const res = await API.post("/auth/login", {
                email,
                password
            });

            localStorage.setItem("token", res.data);

            navigate("/");

        } catch (err) {

            setError("Invalid credentials");

        }

    };

    return (

        <div className="flex justify-center items-center h-[80vh]">

            <div className="bg-white shadow-xl p-8 rounded-lg w-96">

                <h2 className="text-3xl font-bold text-center mb-6">
                    Login
                </h2>

                {error && (
                    <p className="text-red-500 text-sm mb-3">
                        {error}
                    </p>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full border p-3 rounded mb-3"
                    onChange={e => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full border p-3 rounded mb-4"
                    onChange={e => setPassword(e.target.value)}
                    required
                />

                <button
                    onClick={login}
                    className="w-full bg-red-500 text-white py-3 rounded hover:bg-red-600 transition"
                >
                    Login
                </button>

                <p className="text-center text-sm mt-4">

                    Don't have an account?

                    <Link
                        to="/register"
                        className="text-red-500 ml-1"
                    >
                        Register
                    </Link>

                </p>

            </div>

        </div>
    );
}