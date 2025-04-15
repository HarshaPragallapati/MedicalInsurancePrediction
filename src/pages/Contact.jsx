import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react'; // You can also use other icon libraries

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const res = await fetch("http://localhost/backend/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
  };
  

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-xl mb-6">We're here to help you with your insurance needs</p>
        <a
          href="#form"
          className="bg-white text-indigo-800 py-3 px-6 rounded-lg text-lg font-semibold hover:bg-indigo-100 transition-all duration-2900"
        >
          Send a Message
        </a>
      </section>

      {/* Contact Form Section */}
      <section id="form" className="py-20 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-lg font-medium text-gray-700 mb-2">Message</label>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Write your message..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 text-white py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 transition-all duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="flex flex-col items-center">
            <Phone className="w-10 h-10 text-indigo-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Phone</h4>
            <p className="text-gray-700">+91 98765 43210</p>
          </div>

          <div className="flex flex-col items-center">
            <Mail className="w-10 h-10 text-indigo-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Email</h4>
            <p className="text-gray-700">support@healthinsure.com</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="w-10 h-10 text-indigo-600 mb-2" />
            <h4 className="text-xl font-semibold mb-1">Location</h4>
            <p className="text-gray-700">SRKR Campus, Andhra Pradesh, India</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
