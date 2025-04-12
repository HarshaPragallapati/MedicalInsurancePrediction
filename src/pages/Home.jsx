import React, { useState } from 'react';

const Home = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    bmi: '',
    smoker: '',
    region: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission here, e.g., call an API or show results
    alert('Form submitted');
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-900 text-white text-center py-20">
        <h1 className="text-5xl font-extrabold mb-4">Affordable Medical Insurance</h1>
        <p className="text-xl mb-8">Get the coverage you need with personalized plans</p>
        <a
          href="#calculator"
          className="bg-violet-800 py-3 px-6 rounded-lg text-lg hover:bg-indigo-700 transition-all duration-300"
        >
          Start Your Quote
        </a>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Comprehensive Coverage</h3>
            <p className="text-gray-600">We offer full coverage with various plans tailored to your needs.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Affordable Prices</h3>
            <p className="text-gray-600">Our prices are designed to fit your budget, without compromising on quality.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
            <h3 className="text-xl font-semibold mb-4">Quick & Easy Application</h3>
            <p className="text-gray-600">Our online tools make applying for insurance fast and straightforward.</p>
          </div>
        </div>
      </section>

      {/* Insurance Calculator Form Section */}
      <section id="calculator" className="bg-gray-100 py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Get Your Insurance Quote</h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-xl space-y-6"
        >
          <div>
            <label htmlFor="age" className="block text-lg font-semibold mb-2">
              Age
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Enter your age"
              required
            />
          </div>

          <div>
            <label htmlFor="gender" className="block text-lg font-semibold mb-2">
              Gender
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            >
              <option value="" disabled>
                Select your Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>

          <div>
            <label htmlFor="bmi" className="block text-lg font-semibold mb-2">
              BMI (Body Mass Index)
            </label>
            <input
              type="number"
              name="bmi"
              value={formData.bmi}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              placeholder="Enter your BMI"
              required
            />
          </div>

          <div>
            <label htmlFor="smoker" className="block text-lg font-semibold mb-2">
              Smoker
            </label>
            <select
              name="smoker"
              value={formData.smoker}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            >
              <option value="" disabled>
                Are you a smoker?
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label htmlFor="region" className="block text-lg font-semibold mb-2">
              Region
            </label>
            <select
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              required
            >
              <option value="" disabled>
                Select your region
              </option>
              <option value="north">North</option>
              <option value="south">South</option>
              <option value="east">East</option>
              <option value="west">West</option>
            </select>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 py-3 px-6 rounded-lg text-white text-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Get Quote
            </button>
          </div>
        </form>
      </section>

      
    </div>
  );
};

export default Home;
