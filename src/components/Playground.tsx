import React, { useEffect, useRef, useState } from "react";
import GameTimer from "./GameTimer";
import { GameMode } from "../types/common";

type Ball = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  color: string;
};

type Props = {
  score: number;
  setScore: (score: number) => void;
  gameDuration: number;
  mode: GameMode;
};

const Playground: React.FC<Props> = ({
  score,
  setScore,
  gameDuration,
  mode,
}) => {
  const [balls, setBalls] = useState<Ball[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    const ballGradients = [
      "radial-gradient(circle at 30% 30%, #ff9a8b, #ff6ec4)",
      "radial-gradient(circle at 30% 30%, #f6d365, #fda085)",
      "radial-gradient(circle at 30% 30%, #a18cd1, #fbc2eb)",
      "radial-gradient(circle at 30% 30%, #fad0c4, #ffd1ff)",
      "radial-gradient(circle at 30% 30%, #ffecd2, #fcb69f)",
      "radial-gradient(circle at 30% 30%, #ff9a9e, #fecfef)",
      "radial-gradient(circle at 30% 30%, #a1c4fd, #c2e9fb)",
    ];
    const spawn = setInterval(() => {
      const x = Math.random() * 90;
      const y = Math.random() * 80;
      const dx = (Math.random() - 0.5) * 2;
      const dy = (Math.random() - 0.5) * 2;
      const id = nextId.current++;
      const color =
        ballGradients[Math.floor(Math.random() * ballGradients.length)];

      const newBall: Ball = { id, x, y, dx, dy, color };

      setBalls((prev) => [...prev, newBall]);
      if (mode !== GameMode.Easy) {
        setTimeout(() => {
          setBalls((prev) => prev.filter((b) => b.id !== id));
        }, 2000);
      }
    }, 1000);

    return () => clearInterval(spawn);
  }, [mode]);

  useEffect(() => {
    // Update Position
    const interval = setInterval(
      () => {
        setBalls((prev) =>
          prev.map((ball) => ({
            ...ball,
            x: Math.min(Math.max(ball.x + ball.dx * 2, 0), 95),
            y: Math.min(Math.max(ball.y + ball.dy * 2, 0), 90),
          }))
        );
      },
      mode === GameMode.Hard ? 50 : gameDuration * 2
    );
    return () => clearInterval(interval);
  }, [gameDuration, mode]);

  const hitBall = (id: number) => {
    setScore(score + 1);
    setBalls((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div
      style={{
        width: "94vw",
        height: "94vh",
        position: "relative",
        overflow: "hidden",
        background: "rgba(0, 0, 0, 0.6)",
        borderRadius: "12px",
      }}
    >
      {balls.map((ball) => (
        <div
          key={ball.id}
          onClick={() => hitBall(ball.id)}
          style={{
            position: "absolute",
            left: `${ball.x}%`,
            top: `${ball.y}%`,
            width: 30,
            height: 30,
            background: ball.color,
            borderRadius: "50%",
            cursor: "pointer",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.3)",
            transition: "top 0.05s linear, left 0.05s linear",
          }}
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: 10,
          left: 10,
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "#fff",
        }}
      >
        Score: {score}
      </div>
      <GameTimer gameDuration={gameDuration} />
    </div>
  );
};

export default Playground;
