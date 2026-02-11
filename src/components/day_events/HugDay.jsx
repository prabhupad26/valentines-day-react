import { useState, useEffect } from "react";
import "./HugDay.css";

const hugPoints = [
  "Mu tamaku hug karibi jebe tume dukhi thiba ❤️",
  "Mu tamaku hug karibi jebe tume kaam re bahut stressed re thiba 💼",
  "Mu tamaku pichu ru hug karibi jebe tume ama pain cooking karuthiba 🍳",
  "Mu tamaku tight hug debi jebe tume overthink karuthiba 🫂",
  "Jebe tume dura ku jiba, mu ekdum tight wala hug patheibi 🫶",
  "Distance thau… mora hug sabubele tamapain available 💫"
];

export default function HugDay() {
  const [started, setStarted] = useState(false);
  const [visibleIndex, setVisibleIndex] = useState(-1);

  useEffect(() => {
    if (!started) return;

    if (visibleIndex < hugPoints.length - 1) {
      const timer = setTimeout(() => {
        setVisibleIndex((prev) => prev + 1);
      }, 1400);

      return () => clearTimeout(timer);
    }
  }, [started, visibleIndex]);

  const allVisible = visibleIndex === hugPoints.length - 1;

  return (
    <div className="hug-wrapper">
      {!started ? (
        <div className="hug-intro">
          <h1 className="hug-heading">Happy Hug Day ❤️</h1>
          <p className="hug-sub">
            Tume jana ei dina ta kete special…  
            Aji Hug Day… au tume mo pakhare nahao 🥺
          </p>

          <button
            className="hug-start-btn"
            onClick={() => {
              setStarted(true);
              setVisibleIndex(0);
            }}
          >
            Quick! Let me hug you virtually 🤗
          </button>
        </div>
      ) : (
        <>
          <h2 className="hug-heading">
            Mora Hug Intentions List ❤️
          </h2>

          <ul className="hug-list">
            {hugPoints.slice(0, visibleIndex + 1).map((point, index) => (
              <li key={index} className="hug-item">
                <span className="hug-bullet">❤️</span>
                {point}
              </li>
            ))}
          </ul>

          {allVisible && (
            <div className="hug-final">
              <h2>Close your eyes…</h2>
              <p>
                Imagine mu tamaku dhire dhire hug karuchi…  
                tight… warm… safe 🫂❤️  
                Happy Hug Day.
              </p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
