// // ------------------------------------
// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-white text-indigo-700 font-bold text-xl px-3 py-1 rounded">MI</div>
              <span className="text-2xl font-bold">Media ITeye</span>
            </div>
            <p className="text-gray-400 mb-4">
              Empowering Connections, Illuminating Networks. Transform your social media presence with our expert services.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href={`https://${social}.com/media_iteye`} 
                  className="bg-gray-800 hover:bg-indigo-700 w-10 h-10 rounded-full flex items-center justify-center transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-gray-400"></div>
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {/* {['Home', 'Services', 'Team', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-amber-400 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))} */}

              {[
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/#services' },
  { name: 'Team', href: '/#team' },
  { name: 'Testimonials', href: '/#testimonials' },
  { name: 'Contact', href: '/#contact' }
].map((item) => (
  <li key={item.name}>
    <a 
      href={item.href}
      className="text-gray-400 hover:text-amber-400 transition duration-300"
    >
      {item.name}
    </a>
  </li>
))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              {[
                { name: 'Social Media Management', href: '/#services' },
                { name: 'Graphic Design', href: '/#services' },
                { name: 'Video Editing', href: '/#services' },
                { name: 'Content Calendar', href: '/#services' },
                { name: 'Marketing Campaigns', href: '/#services' }
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.href} className="text-gray-400 hover:text-amber-400 transition duration-300">
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +91 95890 46658
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contact@mediaiteye.com
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 mr-2 mt-0.5 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Delhi, India 110008
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex items-center justify-between text-gray-500 relative">
          <p className="m-0">© {new Date().getFullYear()} Media ITeye. All rights reserved.</p>
          <a
            href="https://pigo-pi.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-400 w-fit"
          >
            Powered By PigoPi
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;