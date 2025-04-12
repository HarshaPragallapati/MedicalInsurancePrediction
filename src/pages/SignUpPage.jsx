import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    try {
      const res = await fetch("http://localhost/backend/register.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (data.success) {
        alert("Registration successful!");
      } else {
        alert(data.message || "Registration failed!");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  

  return (
    <div className="max-w-lg mx-auto p-8 mt-10">
      <div className="bg-green-100 shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-700">Sign Up</h2>
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

          <div>
            <label htmlFor="confirmPassword" className="block text-lg font-semibold mb-2 text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 py-3 px-6 rounded-lg text-white text-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>

        <div className="mt-6 text-center">
          <p className="text-sm">Already have an account? <Link to="/login" className="text-indigo-600 hover:text-indigo-800">Login here</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
