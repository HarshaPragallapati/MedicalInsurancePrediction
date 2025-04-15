import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost/backend/login.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        alert("Login successful!");
        navigate('/');

      } else {
        alert(data.message || "Login failed!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-8 mt-10 mb-11">
      <div className="bg-blue-100 shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-lg font-semibold mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-lg font-semibold mb-2 text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 py-3 px-6 rounded-lg text-white text-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Login
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">Don't have an account? <Link to="/signup" className="text-indigo-600 hover:text-indigo-800">Sign up here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
