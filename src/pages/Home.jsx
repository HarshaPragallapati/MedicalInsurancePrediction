import React, { useState, useEffect, useRef } from 'react';
import heroImage2 from '../assets/b.jpg';
import heroImage3 from '../assets/a.jpg';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const images = [
  { src: heroImage2, alt: "Family Plan" },
  { src: heroImage3, alt: "Senior Coverage" },
];

const Home = () => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    bmi: '',
    smoker: '',
    region: '',
  });
  const [quote, setQuote] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const calculatorRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (calculatorRef.current) {
      observer.observe(calculatorRef.current);
    }

    return () => {
      if (calculatorRef.current) {
        observer.unobserve(calculatorRef.current);
      }
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://localhost/backend/quote.php', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await response.json();
    if (data.quote) {
      setQuote(data.quote);
    } else {
      alert('Error calculating quote');
    }
  };

  return (
    <div className="font-sans bg-gray-50">
      {/* Hero Section */}
      <section className="relative text-white text-center py-24 md:py-40 mx-4 md:mx-20 rounded-3xl overflow-hidden shadow-lg" style={{ minHeight: '100vh', width: '80%', margin: 'auto', paddingTop: '20px', height: '500px', marginTop: '20px' }}>
        <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false} interval={3000} transitionTime={1000} className="carousel absolute left-0 w-full h-full">
          {images.map((image, index) => (
            <div key={index} className="relative w-full h-full">
              <img src={image.src} alt={image.alt} className="w-full h-full object-cover transition-all duration-1000 ease-in-out" />
              <div className="absolute top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-10 bg-white/60 p-6 rounded-xl shadow-md">
                <h1 className="text-4xl font-extrabold mb-4 text-gray-800">Affordable Medical Insurance</h1>
                <p className="text-lg mb-6 text-gray-800">Get the coverage you need with personalized plans</p>
                <a href="#calculator" className="bg-indigo-600 py-3 px-8 rounded-full text-white text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105">
                  Start Your Quote
                </a>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* Insurance Calculator Form */}
      <section ref={calculatorRef} id="calculator" className={`py-20 px-6 transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-900">Get Your Insurance Quote</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-10 rounded-2xl shadow-2xl space-y-6 border-t-4 border-indigo-500 animate-fadeIn">
          {[{ name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age' }, { name: 'bmi', label: 'BMI (Body Mass Index)', type: 'number', placeholder: 'Enter your BMI' }]
            .map((input) => (
              <div key={input.name}>
                <label className="block text-lg font-medium mb-2 text-gray-700" htmlFor={input.name}>{input.label}</label>
                <input type={input.type} name={input.name} value={formData[input.name]} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder={input.placeholder} required />
              </div>
            ))}
          {[{ name: 'gender', label: 'Gender', options: ['', 'Male', 'Female'] }, { name: 'smoker', label: 'Smoker', options: ['', 'Yes', 'No'] }, { name: 'region', label: 'Region', options: ['', 'North', 'South', 'East', 'West'] }]
            .map((select) => (
              <div key={select.name}>
                <label className="block text-lg font-medium mb-2 text-gray-700" htmlFor={select.name}>{select.label}</label>
                <select name={select.name} value={formData[select.name]} onChange={handleInputChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" required>
                  {select.options.map((opt, idx) => <option key={idx} value={opt.toLowerCase()} disabled={idx === 0}>{opt || `Select your ${select.label.toLowerCase()}`}</option>)}
                </select>
              </div>
            ))}
          <div className="text-center pt-4">
            <button type="submit" className="bg-indigo-600 py-3 px-8 rounded-full text-white text-lg font-semibold hover:bg-indigo-700 transition-transform transform hover:scale-105 shadow-lg">
              Get Quote
            </button>
          </div>
        </form>
        {quote && (
          <div className="mt-8 text-center">
            <h3 className="text-2xl font-semibold text-indigo-800">Your Estimated Quote</h3>
            <p className="text-xl text-gray-700">${quote}</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
