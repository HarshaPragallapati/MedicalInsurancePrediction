import React from 'react';
import btn from '../assets/button_img.jpg'
import { NavLink } from 'react-router-dom';
const About = () => {
  return (
    <section id="About" className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Background image for the h2 text */}
        <div
          className="bg-cover bg-center py-16 mb-8 w-full flex flex-col justify-start items-start pl-8"
          style={{
            backgroundImage:
              "url('https://www.iciciprulife.com/content/icici-prudential-life-insurance/health-insurance/reasons-why-you-should-buy-health-insurance/_jcr_content/contentpar/product_banner.img.jpg/1614755982505.jpg')",
          }}
        >
          <div className="w-1/2 mb-4"> {/* Added margin-bottom to give space between text and button */}
            <h2 className="text-4xl font-semibold text-left text-black">
              Welcome to Our Health Insurance Service
            </h2>
          </div>

          <div className="button-container">
            <button className="image-button flex items-center justify-center bg-white border-2 border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:border-blue-700 cursor-pointer">
              <img src={btn} alt="Your Image" className="w-10 h-10 object-contain transition-transform duration-300 hover:scale-110 mr-3" />
              <NavLink to='/insuranceplans' className="flex flex-col items-center">
                <p className="font-semibold">Check</p>
                <p className="font-semibold">Insurance</p>
              </NavLink>

            </button>
          </div>




        </div>



        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Our health insurance service is designed to offer you comprehensive coverage and peace of mind when it comes to managing your health and medical expenses. Whether you're seeking individual plans, family coverage, or specialized health services, we have a variety of options to fit your needs and budget.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Why Choose Us?</h3>
        <ul className="list-none space-y-4">
          <li className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-800">Affordable Plans:</strong> Choose from a variety of plans that are designed to provide maximum coverage without breaking your budget.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-800">Comprehensive Coverage:</strong> Get protection for hospital stays, doctor visits, prescription medications, wellness programs, and more.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-800">Convenient Access:</strong> Access healthcare services at any time, with a wide network of doctors and hospitals available to you.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-800">24/7 Support:</strong> Our customer support team is available 24/7 to assist you with claims, coverage, and any other questions you may have.
          </li>
          <li className="text-lg text-gray-700">
            <strong className="font-semibold text-gray-800">Flexible Options:</strong> Customize your plan to suit your needs with add-ons like dental, vision, or mental health services.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">How It Works</h3>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Getting started with our health insurance service is simple and straightforward. Here’s how it works:
        </p>
        <ol className="list-decimal pl-8 space-y-4 text-lg text-gray-700">
          <li><strong className="font-semibold text-gray-800">Step 1:</strong> Browse our available plans and select one that fits your needs.</li>
          <li><strong className="font-semibold text-gray-800">Step 2:</strong> Sign up and complete the necessary forms to register for your chosen plan.</li>
          <li><strong className="font-semibold text-gray-800">Step 3:</strong> Start using your health insurance! Access healthcare services, submit claims, and enjoy the peace of mind that comes with knowing you're covered.</li>
        </ol>

        <h3 className="text-2xl font-semibold text-gray-800 mt-12 mb-4">Get Started Today</h3>
        <p className="text-lg text-center text-gray-700 mb-8">
          Don’t wait for an emergency to find out if you’re covered. Start your health insurance journey today and secure the future of your health and well-being.
          <a href="/get-started" className="text-teal-500 font-semibold hover:underline">Click here to get started</a>.
        </p>
      </div>
    </section>
  );
}

export default About;