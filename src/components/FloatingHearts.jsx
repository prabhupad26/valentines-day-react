import { useEffect, useState } from "react";

export default function FloatingHearts() {
  const [hearts, setHearts] = useState([]);

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

  return (
    <>
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
    </>
  );
}
