import { useState } from "react";
import "./PaniPuriDay.css";

export default function PaniPuriDay() {
  const [accepted, setAccepted] = useState(false);
  const [panipuriCount, setPanipuriCount] = useState(0);

  return (
    <div className="chocolate-day">
      {!accepted ? (
        <>
          <h2>Dear Nupur Happy Chocolate Day 🍫</h2>
          <p className="text">
            Mu bhabhi thili ki chocolate debi tamaku…
          </p>

          <p className="text reject">
            But then I remembered —
            <br />
            you don’t even like chocolate 😏
          </p>

          <button
            className="btn reject-btn"
            onClick={() => setAccepted(true)}
          >
            Obviously not 🙄
          </button>
        </>
      ) : (
        <>
          <h2>Pani Puri Day It Is 🌶️💖</h2>

          <p className="text">
            So I got you something much better.
            <br />
            Click to eat pani puri 😋
          </p>

          <div className="panipuri-plate">
            {Array.from({ length: panipuriCount }).map((_, i) => (
              <span key={i} className="panipuri">
                🌕🧉🥙
              </span>
            ))}
          </div>

          {panipuriCount < 8 ? (
            <button
              className="btn panipuri-btn"
              onClick={() => setPanipuriCount((p) => p + 1)}
            >
              Feed me pani puri 🤍
            </button>
          ) : (
            <p className="final-text">
              Bas bas 😌  
              Enough pani puri…  
              now just save some space for me 💖
            </p>
          )}
        </>
      )}
    </div>
  );
}
