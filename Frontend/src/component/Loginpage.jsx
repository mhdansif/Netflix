import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (result) navigate("/success");
      else navigate("/failed");
    } catch (err) {
      console.error(err);
      setError("Server error. Try again later.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-80 flex flex-col gap-4">
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="border p-2 rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="border p-2 rounded" required />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </form>
    </div>
  );
};

export default Loginpage;
