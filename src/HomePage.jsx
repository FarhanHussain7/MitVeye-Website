import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Team from './pages/Team';
import Testimonials from './pages/Testimonials';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const HomePage = () => {
  React.useEffect(() => {
    // Enable smooth scrolling for anchor links
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = '';
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Home />
        <div id="services"><Services /></div>
        <div id="team"><Team /></div>
        <div id="testimonials"><Testimonials /></div>
        <div id="about"><AboutUs /></div>
        <div id="contact"><Contact /></div>
      </main>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919589046658?text=Hi%20Media%20ITeye!%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 bottom-6 right-6 flex flex-col items-center group"
        style={{ textDecoration: 'none' }}
        title="Chat with us on WhatsApp"
      >
        <span className="bg-green-500 hover:bg-green-600 rounded-full shadow-lg p-4 flex items-center justify-center transition-all duration-300 animate-bounce" style={{ boxShadow: '0 4px 24px 0 rgba(37, 211, 102, 0.3)' }}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path d="M23.472 19.339c-.355-.177-2.104-1.037-2.43-1.155-.326-.119-.563-.177-.8.177-.237.355-.914 1.155-1.12 1.392-.207.237-.412.266-.767.089-.355-.178-1.5-.553-2.86-1.763-1.057-.944-1.77-2.108-1.98-2.463-.207-.355-.022-.546.155-.723.159-.158.355-.414.533-.622.178-.207.237-.355.355-.592.119-.237.06-.444-.03-.622-.089-.178-.8-1.924-1.096-2.637-.289-.693-.583-.599-.8-.61-.207-.009-.444-.011-.681-.011-.237 0-.622.089-.948.444-.326.355-1.24 1.211-1.24 2.955 0 1.744 1.27 3.428 1.447 3.666.178.237 2.5 3.82 6.063 5.209.849.292 1.51.466 2.027.596.851.203 1.627.174 2.24.106.683-.076 2.104-.859 2.403-1.689.296-.83.296-1.541.207-1.689-.089-.148-.326-.237-.681-.414z" fill="#fff"/>
          </svg>
        </span>
        <span className="mt-1 text-xs font-semibold text-green-700 bg-white px-2 py-0.5 rounded shadow group-hover:bg-green-100 transition">Chat with us</span>
      </a>
    </div>
  );
};

export default HomePage;
