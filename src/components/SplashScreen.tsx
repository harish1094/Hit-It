import { motion } from "framer-motion";
import { useEffect } from "react";
import MotionBall from "./MotionBall";

type Props = {
  onComplete: () => void;
};

const SplashScreen: React.FC<Props> = ({ onComplete }) => {
  
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: 700,
          background: "linear-gradient(to right, #ff6ec4, #7873f5)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        Hit It!
      </h1>
      <h4
        style={{
          background: "linear-gradient(to right, #ff6ec4, #7873f5)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        One goal. Hit them all.
      </h4>
      <MotionBall />
      <p
        style={{
          fontSize: "1rem",
          opacity: 0.6,
          position: "absolute",
          bottom: 20,
          fontStyle: "italic",
        }}
      >
        Version 1.0.0
      </p>
    </motion.div>
  );
};

export default SplashScreen;
