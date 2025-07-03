import { motion } from 'framer-motion';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.98,
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.98,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const PageTransition = ({ children }) => {
  return (
    <motion.div      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      className="w-full min-h-screen"
      onAnimationStart={() => {
        // Smooth scroll to top with easing
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }}
      onAnimationComplete={() => {
        // Ensure focus is managed correctly after transition
        document.body.style.scrollBehavior = 'smooth';
      }}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
