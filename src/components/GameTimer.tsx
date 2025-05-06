import React, { useEffect, useState } from "react";

type Props = {
  gameDuration: number;
};

const GameTimer: React.FC<Props> = ({ gameDuration }) => {
  const [timer, setTimer] = useState(gameDuration / 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 10,
        fontSize: "1.5rem",
        fontWeight: 600,
        color: "#fff",
      }}
    >
      {timer}
    </div>
  );
};

export default GameTimer;
