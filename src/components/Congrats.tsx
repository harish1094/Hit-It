import React from "react";

type Props = {
  score: number;
  onClose: () => void;
};

const Congrats: React.FC<Props> = ({ score, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.8)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 10,
        color: "#fff",
        textAlign: "center",
        animation: "fadeIn 0.5s ease-in-out",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #00ffc8, #00bfff)",
          padding: "3rem 4rem",
          borderRadius: "20px",
          boxShadow: "0 0 40px rgba(0, 255, 200, 0.3)",
        }}
      >
        <h1 style={{ fontSize: "4rem", marginBottom: "1rem", color: "#000" }}>
          🏆
        </h1>
        <h2 style={{ fontSize: "2rem", marginBottom: "1rem", color: "#000" }}>
          🎉 Congratulations!
        </h2>
        <p style={{ fontSize: "1.2rem", color: "#222" }}>
          You scored <strong>{score}</strong> points. Great job!
        </p>
        <button onClick={onClose}>{"Close"}</button>
      </div>
    </div>
  );
};

export default Congrats;
