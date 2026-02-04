import React, { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [showUrbanInput, setShowUrbanInput] = useState(false);
  const [showAmazonInput, setAmazonInput] = useState(false);
  const [noPos, setNoPos] = useState({ x: 60, y: 60 });
  const [showModal, setShowModal] = useState(false);
  const [hearts, setHearts] = useState([]);

  /* 💖 Floating hearts animation */
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => [
        ...prev.slice(-120),
        {
          id: Date.now(),
          left: Math.random() * 100,
          duration: Math.random() * 3 + 3,
        },
      ]);
    }, 800);

    return () => clearInterval(interval);
  }, []);

  /* 🏃 Escape button logic */
    const moveNoButton = (e) => {

      const padding = 2; // keep inside screen
      const maxX = 100 - padding;
      const maxY = 100 - padding;

      // Base random position
      let newX = Math.random() * maxX;
      let newY = Math.random() * maxY;

      // If we know cursor/touch position → jump AWAY from it
      if (e?.clientX && e?.clientY) {
        console.log(e.clientX, e.clientY);
        const screenX = (e.clientX / window.innerWidth) * 100;
        const screenY = (e.clientY / window.innerHeight) * 100;

        const dx = newX - screenX;
        const dy = newY - screenY;

        // Push it farther in the opposite direction
        newX += dx * 2;
        newY += dy * 2;
      }

      
      console.log("Moving NO button to:", newX, newY);
      setNoPos({ x: newX, y: newY });
  };

  /* 😈 NO button click */
  const noClicked = () => {
    alert(
      "AH! You caught the button 😅\n\nLucky you, you have won one free date on Feb 14th with a special someone 💘"
    );
  };

  /* 💌 YES submit */
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cc1be779-4934-457d-8151-1bef847f9f45");
    console.log(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data.success);
    alert("Looking forward to make you feel special!! 💖");
    setShowModal(false);
  };

  return (
    <div className="app">
      {/* Floating hearts */}
      {hearts.map((h) => (
        <i
          key={h.id}
          className="fa-solid fa-heart heart"
          style={{
            left: `${h.left}vw`,
            animationDuration: `${h.duration}s`,
          }}
        />
      ))}

      <div className="card">
        <p className="pre-text">Dear Nupur, Will you be my</p>
        <h1 className="title">Valentine 💖</h1>

        <form onSubmit={onSubmit} className="button-area">
          <button type="button" className="btn yes" onClick={() => setShowModal(true)}>
            YES!
          </button>

          <button
            type="button"
            className="btn no"
            style={{
              left: `${noPos.x}%`,
              top: `${noPos.y}%`,
            }}
            onMouseEnter={moveNoButton}
            onTouchStart={moveNoButton}
            onClick={noClicked}
          >
            NO!
          </button>
          {/* 💝 Modal */}
          {showModal && (
            <div className="modal-backdrop" onClick={() => setShowModal(false)}>
              <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button className="close" onClick={() => setShowModal(false)}>
                  ×
                </button>

                <h3>💖 Valentine’s Day Plan?</h3>

                <label>
                  <input type="checkbox" name="options" value="Biryani" />
                  Mast wala Biryani 🍽️
                </label>

                <label className="radio-option">
                  <input
                    type="checkbox"
                    name="options"
                    value="UrbanClap"
                    onChange={(e) => setShowUrbanInput(e.target.checked)}
                  />
                  Pick Anything from UrbanClap and I will book it (Any Kind of Pampering you would like ?)

                  <input
                    type="text"
                    name="UrbanClapDetails"
                    placeholder="What should I book? 😏"
                    disabled={!showUrbanInput}
                    className="inline-input"
                  />
                </label>

                <label className="radio-option">
                  <input
                    type="checkbox"
                    name="options"
                    value="Amazon_WishList"
                    onChange={(e) => setAmazonInput(e.target.checked)}
                  />
                  Anything from your Amazon Wish List, like the full length mirror for you room ? 

                  <input
                    type="text"
                    name="Amazon_WishListDetails"
                    placeholder="What should I buy? 😏"
                    disabled={!showAmazonInput}
                    className="inline-input"
                  />
                </label>

                <button type="submit" className="btn submit">
                  Submit 💌
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
}
