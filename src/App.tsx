import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import GameMenu from "./components/GameMenu";
import Playground from "./components/Playground";
import { GameMode } from "./types/common";
import Congrats from "./components/Congrats";

const gameDuration = 1 * 20 * 1000; //min * sec * ms

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [firstTry, setFirstTry] = useState(true);
  const [isWinner, setWinner] = useState(false);

  const [mode, setMode] = useState<GameMode>(GameMode.Hard);

  const handleStart = () => {
    setStarted(true);
    setScore(0);
    onGameStart();
    setFirstTry(false);
  };

  const handleGameEnd = () => {
    setStarted(false);
  };

  const handleClose = () => {
    setWinner(false);
  };

  const onGameStart = () => {
    const endTimer = setTimeout(() => {
      clearTimeout(endTimer);
      handleGameEnd();
    }, gameDuration + 1000);
  };

  return (
    <div
      style={{
        textAlign: "center",
        padding: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isWinner && <Congrats score={score} onClose={handleClose}/>}
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : !started ? (
        <GameMenu
          onStart={handleStart}
          score={score}
          firstTry={firstTry}
          gameDuration={gameDuration}
          mode={mode}
          setMode={setMode}
        />
      ) : (
        <Playground
          score={score}
          setScore={setScore}
          gameDuration={gameDuration}
          mode={mode}
          showWinPopup={()=>{setWinner(true)}}
        />
      )}
    </div>
  );
};

export default App;
