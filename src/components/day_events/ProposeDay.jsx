import { useState } from "react";
import "./ProposeDay.css";

export default function ProposeDay() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="propose-day">
      <h2>Dear Nupur 💖</h2>

      <p className="propose-text">
        Mu tamaku chase kari asuchi just because of that one simple hug you gave me.  
        Seita bahut real feel hei thila — and it is still stuck in my memory.
        <br /><br />

        That moment gave me hope…  
        hope that we can create something truly beautiful together.
        <br /><br />

        I have met the real you, and I really mean it when I say:
        <br /><br />

        I want to see your beautiful smile forever.  
        I want to be there for you, even when things get difficult.  
        I want to be yours — forever.
        <br /><br />

        Things have been confusing and difficult for me,  
        but I have held on only to you, because I believe in us.
        I won't give up so easily.
        <br /><br />

        </p>


      {!revealed ? (
        <button className="btn propose-btn" onClick={() => setRevealed(true)}>
          I have something to ask you…
        </button>
      ) : (
        <div className="proposal">
          <h1 className="question">Will you be mine? 💍</h1>
          <p className="sub-text">
            Not just today, but in all the little tomorrows we haven’t lived yet.
          </p>
        </div>
      )}
    </div>
  );
}
