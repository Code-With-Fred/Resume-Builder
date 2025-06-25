import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const storedMode = localStorage.getItem('theme');
    return storedMode === 'dark';
  });

  // Animation controls for constellations
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Constellation animation variants
  const constellationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const starVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: [0, 1, 0.5, 1],
      scale: [0, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatType: 'mirror' as const
      }
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-white via-black-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-800 dark:text-white flex items-center justify-center px-4 transition-colors duration-1000 overflow-hidden pt-12 pb-12"
      ref={ref}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Constellation */}
        <motion.div
          className="absolute inset-0"
          variants={constellationVariants}
          initial="hidden"
          animate={controls}
        >
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${darkMode ? 'bg-white' : 'bg-blue-400'}`}
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              variants={starVariants}
            />
          ))}
        </motion.div>

        {/* Floating abstract shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 blur-xl"
          animate={{
            x: [0, 20, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-40 h-40 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 blur-xl"
          animate={{
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="max-w-4xl w-full text-center relative z-10"
      >
        {/* Theme toggle with smooth animation */}
        <motion.button
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="absolute top-4 right-4 text-sm px-3 py-2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white rounded-full transition-all duration-300 flex items-center gap-1 shadow-lg"
        >
          {darkMode ? (
            <>
              <motion.span 
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                
              </motion.span>
<span className="hidden sm:inline mx-4">Light Mode</span>
            </>
          ) : (
            <>
              <motion.span 
                animate={{ rotate: -15, scale: [1, 1.1, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                
              </motion.span>
              <span className="hidden sm:inline">Dark Mode</span>
            </>
          )}
        </motion.button>

        {/* Main heading with typewriter effect */}
        <motion.div className="mb-8 overflow-hidden">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.span
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="inline-block overflow-hidden whitespace-nowrap"
            >
              Resume Builder
            </motion.span>
          </motion.h1>
          <motion.div
            className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
          />
        </motion.div>

        {/* Animated tagline */}
        <motion.p
          className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <motion.span
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            stress free resume builder.
          </motion.span>{' '}
          <motion.span
            className="font-bold text-blue-600 dark:text-blue-400 inline-block"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: ["0 0 0px rgba(0,0,0,0)", "0 0 10px rgba(59,130,246,0.5)", "0 0 0px rgba(0,0,0,0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            visually stunning narrative
          </motion.span>{' '}
          that recruiters can't ignore.
        </motion.p>

        {/* Feature highlights */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, staggerChildren: 0.1 }}
        >
          {[
            {
              icon: '',
              title: 'Lightning Fast',
              desc: 'Build in minutes, not hours'
            },
            {
              icon: '',
              title: 'Designer Templates',
              desc: 'Curated by career experts'
            },
            {
              icon: '',
              title: 'AI Enhancements',
              desc: 'Smart suggestions included'
            }
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.2 }}
            >
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Animated CTA buttons */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <Link
            to="/resume-builder"
            className="relative overflow-hidden group"
          >
            <motion.div
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Launch Builder 
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Link>

          <Link
            to="/view-resume"
            className="relative overflow-hidden group"
          >
            <motion.div
              className="px-8 py-4 rounded-xl border-2 border-blue-600 text-blue-600 dark:text-blue-400 font-bold text-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Templates
                <motion.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ✨
                </motion.span>
              </span>
              <motion.div
                className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                initial={{ x: '-100%' }}
                whileHover={{ x: '0%' }}
                transition={{ duration: 0.5 }}
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* Testimonial floating in */}
        <motion.div
          className="mt-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-md mx-auto border border-gray-100 dark:border-gray-700"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
              <span className="text-blue-600 dark:text-blue-300"></span>
            </div>
            <div>
              <h4 className="font-bold">Sarah K.</h4>
              <p className="text-sm text-gray-500">Hired at Google</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 italic">
            "This builder helped me land my dream job! The templates are so professional and the process was effortless."
          </p>
          <div className="flex mt-3">
            {[...Array(5)].map((_, i) => (
              <motion.span
                key={i}
                className="text-yellow-400 text-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ delay: 2.2 + i * 0.1, duration: 0.5 }}
              >
                ★
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Floating scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="text-gray-400 dark:text-gray-500 text-sm flex flex-col items-center">
            <span>Scroll</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mt-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;