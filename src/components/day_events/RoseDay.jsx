import { useState } from "react";
import "./RoseDay.css";

export default function RoseDay() {
    const [roses, setRoses] = useState(0);

    const addRose = () => {
        setRoses((prev) => Math.min(prev + 1, 12));
    };

    return (
        <div className="rose-day">
            <h2>For you 🌹</h2>

            <p className="rose-text">
                Roses are red violets are blue, keep on clicking the button to grow a rose for you 🌹
            </p>

            <div className="garden">
                {Array.from({ length: roses }).map((_, i) => (
                    <span key={i} className="rose">
                        🌹
                    </span>
                ))}
            </div>

            {roses < 12 ? (
                <button className="btn rose-btn" onClick={addRose}>
                    Grow a Rose 🌱
                </button>
            ) : (
                <p className="final-message">
                    A garden full of roses… still not enough for you 💖
                </p>
            )}
        </div>
    );
}
