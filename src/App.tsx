import React, { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import GameMenu from "./components/GameMenu";
import Playground from "./components/Playground";

const gameDuration = 1 * 20 * 1000; //min * sec * ms

const App: React.FC = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [firstTry, setFirstTry] = useState(true);

  const handleStart = () => {
    setStarted(true);
    setScore(0);
    onGameStart();
    setFirstTry(false);
  };

  const handleGameEnd = () => {
    setStarted(false);
  };

  const onGameStart = () => {
    const endTimer = setTimeout(() => {
      clearTimeout(endTimer);
      handleGameEnd();
    }, gameDuration);
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
      {showSplash ? (
        <SplashScreen onComplete={() => setShowSplash(false)} />
      ) : !started ? (
        <GameMenu onStart={handleStart} score={score} firstTry={firstTry} gameDuration={gameDuration}/>
      ) : (
        <Playground
          score={score}
          setScore={setScore}
          gameDuration={gameDuration}
        />
      )}
    </div>
  );
};

export default App;
