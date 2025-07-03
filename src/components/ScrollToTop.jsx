import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    // Using modern smooth scroll behavior
    const timeoutId = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  return null;
};

export default ScrollToTop;
