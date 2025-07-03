import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './HomePage';
import Admin from './pages/Admin';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Services from './pages/Services';
import { AuthProvider } from './context/AuthContext';
import PageTransition from './components/PageTransition';
import ScrollToTop from './components/ScrollToTop';

// Temporarily disabled authentication
const ProtectedRoute = ({ children }) => {
  return children; // Bypass authentication check
};

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={() => {
      // Reset any focus or scroll behavior after exit animation
      window.history.scrollRestoration = 'manual';
    }}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/admin" element={
          <ProtectedRoute>
            <PageTransition>
              <Admin />
            </PageTransition>
          </ProtectedRoute>
        } />
        <Route path="/login" element={<Navigate to="/" />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar />
          <main className="flex-grow mt-16">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;

// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Services from './pages/Services';
// import Team from './pages/Team';
// import Testimonials from './pages/Testimonials';
// import Contact from './pages/Contact';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen flex flex-col bg-gray-50">
//         <Header />
//         <main className="flex-grow">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/services" element={<Services />} />
//             <Route path="/team" element={<Team />} />
//             <Route path="/testimonials" element={<Testimonials />} />
//             <Route path="/contact" element={<Contact />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;