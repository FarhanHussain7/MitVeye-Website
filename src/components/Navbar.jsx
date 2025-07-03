// import React, { useState, useEffect } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { motion, AnimatePresence } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';
// import { faSlack } from '@fortawesome/free-brands-svg-icons';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       const viewportHeight = window.innerHeight;
//       const threshold = viewportHeight * 0.1;
//       setIsScrolled(scrollPosition > threshold);
//     };

//     handleScroll();
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const menuItems = [
//     { title: 'Home', path: '/' },
//     { title: 'Policies', path: '/policies' },
//     { title: 'Services', path: '/services' },
//     { title: 'About', path: '/about' },
//     { title: 'Contact', path: '/contact' },
//   ];

//   const isActive = (path) => {
//     if (path === '/' && location.pathname === '/') return true;
//     return path !== '/' && location.pathname.startsWith(path);
//   };

//   const navLinkVariants = {
//     hover: {
//       scale: 1.1,
//       transition: { duration: 0.2, ease: 'easeInOut' },
//     },
//   };

//   return (
//     <>
//       <motion.nav
//         initial={false}
//         animate={{
//           boxShadow: isScrolled ? '0 8px 32px rgba(0, 0, 0, 0.1)' : 'none',
//         }}
//         transition={{ duration: 0.3 }}
//         className={`fixed top-0 left-0 w-full z-50 h-16 transition-all duration-500 ${
//           isScrolled
//             ? 'bg-white/95 backdrop-blur-md border-b border-gray-200'
//             : 'bg-white/90 backdrop-blur-md'
//         }`}
//       >
//         <div className="container mx-auto px-4 relative h-full">
//           <div className="flex justify-between items-center h-full">
//             {/* Logo */}
//             <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
//               <Link to="/" className="flex items-center space-x-3">
//                 <FontAwesomeIcon icon={faSlack} className="text-2xl text-blue-600" />
//                 <span className="text-2xl font-bold text-blue-600">LifeSure</span>
//               </Link>
//             </motion.div>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex flex-1 justify-center space-x-8">
//               {menuItems.map((item, index) => (
//                 <motion.div key={index} variants={navLinkVariants} whileHover="hover">
//                   <Link
//                     to={item.path}
//                     className={`relative py-1.5 text-sm font-medium tracking-wide transition-colors duration-300 ${
//                       isActive(item.path)
//                         ? 'text-blue-600 font-semibold'
//                         : 'text-black hover:text-blue-600'
//                     }`}
//                   >
//                     {item.title}
//                     {isActive(item.path) && (
//                       <motion.div
//                         layoutId="underline"
//                         className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600"
//                         initial={false}
//                         transition={{ duration: 0.3 }}
//                       />
//                     )}
//                   </Link>
//                 </motion.div>
//               ))}
//             </div>

//             {/* Toggle Button - Mobile */}
//             <div className="md:hidden flex items-center">
//               <motion.button
//                 whileTap={{ scale: 0.95 }}
//                 onClick={toggleMenu}
//                 className="inline-flex items-center justify-center p-2 rounded-md transition-colors duration-300 text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-600"
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <FontAwesomeIcon icon={faBars} />
//               </motion.button>
//             </div>
//           </div>
//         </div>
//       </motion.nav>

//       {/* AnimatePresence handles mount/unmount animation */}
//       <AnimatePresence>
//         {isOpen && (
//           <>
//             {/* Slide-in Menu */}
//             <motion.div
//               key="mobile-menu"
//               initial={{ x: '-100%' }}
//               animate={{ x: '0%' }}
//               exit={{ x: '-100%' }}
//               transition={{ duration: 0.3, ease: 'easeInOut' }}
//               className="fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-white z-50 shadow-lg md:hidden"
//             >
//               <div className="px-4 pt-5 pb-3 space-y-1">
//                 {menuItems.map((item, index) => (
//                   <Link
//                     key={index}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 ${
//                       isActive(item.path)
//                         ? 'text-blue-600 bg-blue-50'
//                         : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
//                     }`}
//                   >
//                     {item.title}
//                   </Link>
//                 ))}
//               </div>
//             </motion.div>

//             {/* Backdrop */}
//             <motion.div
//               key="backdrop"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 0.4 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.3 }}
//               onClick={() => setIsOpen(false)}
//               className="fixed inset-0 bg-black z-40"
//             />
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;

// src/components/Header.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
 
// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gradient-to-r from-indigo-700 to-purple-600 text-white shadow-lg border border-orange-700">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <Link to="/" className="flex items-center space-x-2">
//             <div className="bg-white text-indigo-700 font-bold text-xl px-3 py-1 rounded">MI</div>
//             <span className="text-2xl font-bold">Media ITeye</span>
//           </Link>
          
//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex space-x-8">
//             {['Home', 'Services', 'Team', 'Testimonials', 'Contact'].map((item) => (
//               <Link 
//                 key={item} 
//                 to={`/${item.toLowerCase()}`} 
//                 className="hover:text-amber-300 transition duration-300 font-medium"
//               >
//                 {item}
//               </Link>
//             ))}
//           </nav>
          
//           {/* Mobile Menu Button */}
//           <button 
//             className="md:hidden text-2xl" 
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//           >
//             ☰
//           </button>
//         </div>
        
//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden mt-4 pb-4">
//             <div className="flex flex-col space-y-3">
//               {['Home', 'Services', 'Team', 'Testimonials', 'Contact'].map((item) => (
//                 <Link 
//                   key={item} 
//                   to={`/${item.toLowerCase()}`} 
//                   className="block py-2 px-4 hover:bg-indigo-800 rounded transition"
//                   onClick={() => setIsMenuOpen(false)}
//                 >
//                   {item}
//                 </Link>
//               ))}
//             </div>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const lastScrollY = useRef(window.scrollY);
  const location = useLocation();
  const navigate = useNavigate();

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Highlight active section on scroll
  useEffect(() => {
    const sectionIds = ['services', 'team', 'testimonials', 'about', 'contact'];
    const handleScroll = () => {
      let found = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            found = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(found);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnchorClick = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: id } });
    } else {
      const el = document.getElementById(id.substring(1));
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const getActiveClass = (pathOrHash) => {
    if (pathOrHash === '/') {
      // Home is active if no section is active or if at the very top
      return (!activeSection && window.scrollY < 100) ? 'text-blue-400 font-bold underline underline-offset-8' : '';
    }
    if (pathOrHash.startsWith('#')) {
      return activeSection === pathOrHash ? 'text-blue-400 font-bold underline underline-offset-8' : '';
    }
    return '';
  };

  return (
    // <div className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-xl">
   <div className="fixed top-0 w-full z-50 bg-blue-500">
   {/* <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center"> */}
   <div className="max-w-screen-2xl mx-auto px-16 py-2 flex justify-between items-center rounded-b-2xl shadow-md bg-white">
    {/* <div className="max-w-[90vw] mx-auto px-6 py-2 flex justify-between items-center rounded-b-2xl shadow-md bg-white"> */}
        {/* Logo */}
        <a href="#" onClick={e => { e.preventDefault(); handleScrollToTop(); navigate('/'); }} className="cursor-pointer flex items-center group">
    <img 
  src="/logo2.jpg" 
  className="h-12 max-w-[160px] w-auto object-contain block" 
  alt="" 
/>
        </a>

        {/* Desktop Nav (shows at sm and up) */}
        <div className="hidden sm:flex sm:items-center font-[Host_Grotesk] text-lg space-x-8 px-6 py-2 rounded-xl text-gray-800 whitespace-nowrap">
          <a href="#" className={`relative group transition-all duration-300 ${getActiveClass('/')}`} onClick={e => { e.preventDefault(); handleScrollToTop(); }}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">Home</span> 
          </a>
          <a href="#services" className={`relative group transition-all duration-300 ${getActiveClass('#services')}`} onClick={e => handleAnchorClick(e, '#services')}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">Services</span> 
          </a>
          <a href="#team" className={`relative group transition-all duration-300 ${getActiveClass('#team')}`} onClick={e => handleAnchorClick(e, '#team')}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">Team</span> 
          </a>
          <a href="#testimonials" className={`relative group transition-all duration-300 ${getActiveClass('#testimonials')}`} onClick={e => handleAnchorClick(e, '#testimonials')}>
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 via-purple-400 to-pink-300 transition-all duration-300">Testimonials</span> 
          </a>
          <a href="#contact" className={`relative px-8 py-2 font-bold text-lg text-white border-2 border-white rounded-xl group overflow-hidden transition-all duration-300 bg-black hover:bg-gray-900 ${getActiveClass('#contact')}`} onClick={e => handleAnchorClick(e, '#contact')}>
            <span className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out scale-110 group-hover:scale-100 blur-sm"></span>
            <span className="absolute inset-0 z-0 bg-white/5 group-hover:bg-white/10 transition-all duration-700 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
            <span className="relative z-10 flex items-center justify-center gap-2 font-bold text-white">Contact Now
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
          </a>
        </div>

        {/* Mobile Icon (shows below sm) */}
        <div className="sm:hidden text-black text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden bg-black/80 h-screen text-white flex flex-col items-center gap-6 py-6">
          <a href="#" onClick={e => { e.preventDefault(); setMenuOpen(false); handleScrollToTop(); }}>Home</a>
          <a href="#services" onClick={e => { handleAnchorClick(e, '#services'); setMenuOpen(false); }}>Services</a>
          <a href="#team" onClick={e => { handleAnchorClick(e, '#team'); setMenuOpen(false); }}>Team</a>
          <a href="#testimonials" onClick={e => { handleAnchorClick(e, '#testimonials'); setMenuOpen(false); }}>Testimonials</a>
          <a href="#contact" className='bg-blue-500 px-12 rounded-xl py-2' onClick={e => { handleAnchorClick(e, '#contact'); setMenuOpen(false); }}>Contact Now</a>
        </div>
      )}
    </div>
  );
};

export default Header;
