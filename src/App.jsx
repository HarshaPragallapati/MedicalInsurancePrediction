import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';  // Assuming you have Navbar component
import Home from './pages/Home.jsx';  // The Home component with your homepage content
import LoginPage from './pages/LoginPage.jsx';
import SignUpPage from './pages/SignUpPage.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx';
import Footer from './components/Footer.jsx'
import InsurancePlans from './pages/InsurancePlans.jsx';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/insuranceplans' element={<InsurancePlans />} />
      </Routes>
      {/* Footer Section */}
      <Footer/>
    </Router>
  );
};

export default App;
