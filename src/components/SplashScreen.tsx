import { motion } from "framer-motion";
import { useEffect } from "react";

type Props = {
  onComplete: () => void;
};

const SplashScreen: React.FC<Props> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 4000);
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
      <motion.div
        animate={{ rotate: 360 }}
        style={{  width: 30,
            height: 30,}}
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
      <p style={{ fontSize: "1rem", opacity: 0.8 }}>Version 1.0.0</p>
    </motion.div>
  );
};

export default SplashScreen;
