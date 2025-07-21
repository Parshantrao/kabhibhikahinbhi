// src/components/AnimatedLoader.jsx
import { motion } from "framer-motion";

const AnimatedLoader = ({ section = "Loading..." }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[50vh] text-center">
      <motion.div
        className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-300 to-yellow-500"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      />
      <motion.p
        className="mt-6 text-xl font-medium text-yellow-600"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        {section}
      </motion.p>
    </div>
  );
};

export default AnimatedLoader;
