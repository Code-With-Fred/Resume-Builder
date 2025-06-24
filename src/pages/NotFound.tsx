import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const NotFound = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h1 className="text-6xl font-bold text-blue-600 mb-4">Coming soon!</h1>
      <p className="text-xl text-gray-700 dark:text-gray-300 mb-6">
        This is a page where users can preview there resume but we are still working on it.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
      >
        Back to Home
      </Link>
    </motion.div>
  );
};

export default NotFound;
