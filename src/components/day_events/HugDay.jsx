import { useState, useEffect } from "react";
import "./HugDay.css";

const hugPoints = [
  "Mu tamaku hug karibi jebe tume dukhi thiba ❤️",
  "Mu tamaku hug karibi jebe tume kamo re stressed re thiba 💼",
  "Mu tamaku pichu ru hug karibi jebe tume ama pain cooking karuthiba 🍳",
  "Mu tamaku tight hug debi jebe tume overthink karuthiba 🫂",
  "Kebe bhi dura ku gala to gote ekdum tight wala hug kariki patheibi 🫂",
  "Distance thau… mora hug ta sabu bele tamapain available 💫"
];

export default function HugDay() {
  const [started, setStarted] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (!started) return;

    if (visibleCount < hugPoints.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [started, visibleCount]);

  return (
    <div className={`hug-wrapper ${started ? "active" : ""}`}>
      {!started ? (
        <button className="hug-start-btn" onClick={() => setStarted(true)}>
          Receive Your Hug 🤗
        </button>
      ) : (
        <div className="hug-list-container">
          <h2 className="hug-heading">
            Aji Hug Day… au tume mo pakhare nahao 🥺
          </h2>

          <ul className="hug-list">
            {hugPoints.slice(0, visibleCount).map((point, index) => (
              <li key={index} className="hug-item">
                <span className="hug-bullet">❤️</span>
                {point}
              </li>
            ))}
          </ul>

          {visibleCount === hugPoints.length && (
            <div className="final-hug">
              <div className="pulse-circle"></div>
              <p>Close your eyes… feel me hugging you tightly 🫂</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
