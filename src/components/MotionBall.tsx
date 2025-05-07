import { motion } from "framer-motion";

const MotionBall: React.FC = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      style={{ width: 30, height: 30 }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div
        style={{
          position: "absolute",
          width: 30,
          height: 30,
          background: `radial-gradient(circle at 30% 30%,rgb(232, 104, 108), #fecfef)`,
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
          transition: "top 0.05s linear, left 0.05s linear",
        }}
      />
    </motion.div>
  );
};

export default MotionBall;
