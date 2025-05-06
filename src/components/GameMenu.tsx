type Props = {
  onStart: () => void;
  score: number;
  firstTry: boolean;
  gameDuration:number;
};

const GameMenu: React.FC<Props> = ({ onStart, score, firstTry,gameDuration }) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "2rem",
      }}
    >
      {firstTry ? (
        <div
          style={{
            fontSize: "1.2rem",
            background: "rgba(255, 255, 255, 0.1)",
            padding: "1rem 1.5rem",
            borderRadius: "12px",
            maxWidth: "600px",
            lineHeight: "1.5",
          }}
        >
          🟠 Balls appear randomly for 2 seconds.
          <br />
          🖱️ Click on as many balls as you can before time runs out.
          <br />
          ⏱️ {`You have ${gameDuration/1000} seconds to play. Good luck!`}
        </div>
      ) : (
        <h2 style={{ fontSize: "2rem" }}>
          Your Score: <strong>{score}</strong>
        </h2>
      )}

      <button onClick={onStart}>{firstTry ? "Let`s Play" : "Play Again"}</button>
    </div>
  );
};

export default GameMenu;
