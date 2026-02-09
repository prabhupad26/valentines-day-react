import { useState } from "react";
import "./TeddyDay.css";

export default function TeddyDay() {
  const [mood, setMood] = useState("shy");
  const [hugs, setHugs] = useState(0);

  const tryHug = () => {
    if (hugs < 1) {
      setMood("run");
      setHugs((h) => h + 1);
    } else {
      setMood("melt");
    }
  };

  return (
    <div className="teddy-day">
      <h2>Dear Nupur Happy Teddy Day 🧸</h2>

      {mood === "shy" && (
        <>
          <p className="teddy-text">
            Mu eka chota teddy…  
            but mu ektu shy achi 🙈
          </p>
          <span className="teddy">🧸</span>
        </>
      )}

      {mood === "run" && (
        <>
          <p className="teddy-text">
            Arre baba!  
            Ete fast hug karibani 😤  
            Aau thare try kara…
          </p>
          <span className="teddy run">🧸</span>
        </>
      )}

      {mood === "melt" && (
        <>
          <p className="teddy-text final">
            Thik achi… mu harigali 🥺  
            Tama hug ta bahut special 💖
            <br />
            Aji tharu mu tumara teddy forever 🧸
          </p>
          <span className="teddy hug">🧸</span>
        </>
      )}

      {mood !== "melt" && (
        <button className="btn teddy-btn" onClick={tryHug}>
          Try to hug the teddy 🤍
        </button>
      )}
    </div>
  );
}
