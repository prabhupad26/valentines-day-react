import { useState } from "react";

export default function EscapeButton({ onClick }) {
  const [pos, setPos] = useState({ x: 60, y: 60 });

  const moveButton = (e) => {
    const padding = 2;
    const maxX = 100 - padding;
    const maxY = 100 - padding;

    let newX = Math.random() * maxX;
    let newY = Math.random() * maxY;

    if (e?.clientX && e?.clientY) {
      const screenX = (e.clientX / window.innerWidth) * 100;
      const screenY = (e.clientY / window.innerHeight) * 100;

      newX += (newX - screenX) * 2;
      newY += (newY - screenY) * 2;
    }

    setPos({ x: newX, y: newY });
  };

  return (
    <button
      type="button"
      className="btn no"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
      onMouseEnter={moveButton}
      onTouchStart={moveButton}
      onClick={onClick}
    >
      NO!
    </button>
  );
}
