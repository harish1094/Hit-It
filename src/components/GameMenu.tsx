import MotionBall from "./MotionBall";
import type { GameMode } from "../types/common";
import { useState } from "react";

type Props = {
  onStart: () => void;
  score: number;
  firstTry: boolean;
  gameDuration: number;
  mode: GameMode;
  setMode: React.Dispatch<React.SetStateAction<GameMode>>;
};

const GameMenu: React.FC<Props> = ({
  onStart,
  score,
  firstTry,
  gameDuration,
  mode,
  setMode,
}) => {
  const selectedMode = useState(mode)[0];

  const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMode(e.target.value as GameMode);
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
        fontFamily: "Roboto",
      }}
    >
      <MotionBall />
      {firstTry ? (
        <div
          style={{
            fontSize: "1.1rem",
            lineHeight: "1.8",
          }}
        >
          <h2
            style={{
              background: "linear-gradient(to right, #ff6ec4, #7873f5)",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            How to Play!!
          </h2>
          🟠 Balls appear randomly for 2 seconds.
          <br />
          🖱️ Click as many as you can before time runs out.
          <br />
          ⏱️ {`You have ${gameDuration / 1000} seconds. Good luck!`}
        </div>
      ) : (
        <h2 style={{ fontSize: "2rem" }}>
          Your Score: <strong>{score}</strong>{" "}
          <span>(Mode: {capitalizeFirstLetter(selectedMode)})</span>
        </h2>
      )}
      <div
        style={{
          margin: "2rem 0",
          display: "",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <label
          htmlFor="mode-select"
          style={{ fontSize: "1rem", display: "block" }}
        >
          🎮 Select Mode:
        </label>
        <select
          id="mode-select"
          value={mode}
          onChange={handleModeChange}
          style={{
            padding: "0.75rem 1.5rem",
            borderRadius: "12px",
            // borderWidth: "0.1rem",
            border: "none",
            background: "#ffffff20",
            color: "#fff",
            fontSize: "1rem",
            backdropFilter: "blur(5px)",
            appearance: "none",
            cursor: "pointer",
            outline: "none",
            transition: "background 0.3s ease",
          }}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <button onClick={onStart}>
        {firstTry ? "Let`s Play" : "Play Again"}
      </button>
    </div>
  );
};

export default GameMenu;

function capitalizeFirstLetter(str: string): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}
