import { useState } from "react";
import "./PromiseDay.css";

const promiseList = [
  { text: "Mu tama paein world ra Best Biryani baneiba sikhibi", emoji: "😊" },
  { text: "Mu tamaku sabu bele khusi rakhibi", emoji: "😊" },
  { text: "Mu tamara health ra pura khayal rakhibi", emoji: "🥗💪" },
  { text: "Amey sangore mile duniya buliba", emoji: "🌍✈️" },
  { text: "Budha heile bi amey paraspara ra sahara heijiba", emoji: "👵👴" },
  { text: "Tamara wardrobe pura stylish outfit re bharti karibi", emoji: "👗✨" },
  { text: "Tamara career growth re mu support karibi", emoji: "🚀💼" },
  { text: "Pratyeka step re mu tamara care nebi", emoji: "🤍" },
  { text: "Tamaku jebe jaha space darkar, mu sada debi", emoji: "🌙" }
];

export default function PromiseDay() {
  const [activePromises, setActivePromises] = useState([]);

  const togglePromise = (index) => {
    if (activePromises.includes(index)) return;
    setActivePromises([...activePromises, index]);
  };

  const allUnlocked = activePromises.length === promiseList.length;

  return (
    <div className="promise-machine">
      <h1 className="promise-title">Promise to Nupur 🤞💖</h1>
      <p className="promise-sub">
        Eta mora Promise Machine.  
        Eithi tume kevala promise padhiba nahi…  
        tume seita activate karucha 💫
      </p>

      <div className="promise-grid">
        {promiseList.map((p, index) => (
          <button
            key={index}
            className={`promise-switch ${
              activePromises.includes(index) ? "on" : ""
            }`}
            onClick={() => togglePromise(index)}
          >
            {activePromises.includes(index)
              ? `${p.emoji} ${p.text}`
              : "🔒 Activate Promise"}
          </button>
        ))}
      </div>

      {allUnlocked && (
        <div className="promise-final">
          <h2>💖 Sabu Promises Activated 💖</h2>
          <p>
            Ye sabu khali katha nuha.  
            Eha mu pratidina tamaku choose karuchi boli proof.  
            Na time limit achi, na condition.  
            Bas… tume au mu 🤍
          </p>
        </div>
      )}
    </div>
  );
}
