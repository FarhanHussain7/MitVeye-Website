import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import Team from './Team';
import Testimonials from './Testimonials';

const Home = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  useEffect(() => {
    setShowAnimation(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-blue-500">
      {/* Hero Section - Split Layout */}
      <section className="flex flex-col md:flex-row items-stretch text-white py-4 md:py-24 relative">
        {/* Left Hero */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Empowering Connections,<br className="hidden md:block" /> Illuminating Networks
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto md:mx-0">
            Transform your online presence into a captivating symphony of likes, shares, and followers!
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a 
              href="#services" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Explore Services
            </a>
            <a 
              href="#contact" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
        {/* Vertical Black Line */}
        <div className="hidden md:flex items-stretch">
          <div className="w-px bg-black h-full mx-4" style={{ minHeight: '300px' }}></div>
        </div>
        {/* Right Hero */}
        <div className="flex-1 flex flex-col justify-center items-center px-4 text-center md:text-right">
          {/* Animated Brand Header for Right Side */}
          <motion.h1
            className="text-[7vw] md:text-[5vw] font-extrabold tracking-wide font-[Host_Grotesk] text-center mb-4 flex items-center justify-center gap-1"
            initial="hidden"
            animate={showAnimation ? "visible" : "hidden"}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.13 } }
            }}
          >
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-red-600 font-black"
              style={{ fontFamily: 'Arial Black, Arial, sans-serif' }}
            >M</motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-black mx-[-0.1em]"
            >it</motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="inline-block align-middle mx-[-0.22em]"
              style={{ width: '1.1em', height: '1em', position: 'relative', top: '-0.32em' }}
            >
              <svg viewBox="0 0 60 50" width="100%" height="100%" style={{ display: 'inline', verticalAlign: 'middle' }}>
                <defs>
                  <linearGradient id="triangleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fef9c3" />
                    <stop offset="100%" stopColor="#22c55e" />
                  </linearGradient>
                </defs>
                <polygon points="30,45 5,5 55,5" fill="url(#triangleGradient)" />
                <line x1="30" y1="2" x2="30" y2="48" stroke="black" strokeWidth="1" strokeLinecap="butt" />
              </svg>
            </motion.span>
            <motion.span
              variants={{ hidden: { y: 80, opacity: 0 }, visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, duration: 0.7 } } }}
              className="text-black"
            >eye</motion.span>
          </motion.h1>

          <img 
  src="/imagesMiteye.jpg" 
  alt="Hero Visual" 
  className="w-200 h-100 object-cover rounded-xl mx-auto mb-4 shadow-2xl border-4 border-white transition-transform duration-300 hover:scale-105 hover:shadow-amber-400/50 hover:shadow-2xl hover:border-green-400"
  style={{ zIndex: 2 }}
/>
          <p className="text-xl mb-8 max-w-2xl mx-auto md:mx-0">
            Let your brand story shine and your message echo across digital landscapes!
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-end gap-4">
            <a 
              href="#about" 
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-8 rounded-full transition duration-300"
            >
              About Us
            </a>
            <a 
              href="#team" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-indigo-800 font-bold py-3 px-8 rounded-full transition duration-300"
            >
              Meet the Team
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Media ITeye</h2>
            <div className="h-1 w-20 bg-indigo-600 mx-auto mb-6"></div>
            <p className="text-lg text-white">
              Media ITeye symbolizes the dynamic synergy between creativity and technology. We transform ideas into 
              compelling narratives through cutting-edge technology, creating a harmonious blend of innovation 
              and communication.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Engage", desc: "Build digital relationships and reputation" },
              { title: "Elevate", desc: "Transform your social media presence" },
              { title: "Empower", desc: "Make your brand dance to the rhythm of success" }
            ].map((item, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-md text-center">
                <h3 className="text-2xl font-bold text-indigo-700 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "15+", label: "Brands Empowered" },
              { value: "25K+", label: "Ad Spend Managed" },
              { value: "10+", label: "Successful Campaigns" },
              { value: "97.9%", label: "Account Reach" }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-indigo-700 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
