import { useState } from "react";
import "./App.css";

import FloatingHearts from "./components/FloatingHearts";
import EscapeButton from "./components/EscapeButton";
import Modal from "./components/Modal";
import ValentineForm from "./components/ValentineForm";
import RoseDay from "./components/day_events/RoseDay";
import EventSelector from "./components/EventSelector";
import ProposeDay from "./components/day_events/ProposeDay";
import PaniPuriDay from "./components/day_events/PaniPuriDay";
import TeddyDay from "./components/day_events/TeddyDay";
import PromiseDay from "./components/day_events/PromiseDay";
import HugDay from "./components/day_events/HugDay";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState("hug-day");


  const noClicked = () => {
    alert(
      "AH! You caught the button 😅\n\nLucky you, you have won one free date on Feb 14th with a special someone 💘"
    );
  };

  return (

      <div className="app">
      <FloatingHearts />
      <div className="card">
        <EventSelector
        value={selectedEvent}
        onChange={setSelectedEvent}/>
        {selectedEvent === "rose" && <RoseDay />}
        {selectedEvent === "propose" && <ProposeDay />}
        {selectedEvent === "pani-puri" && <PaniPuriDay />}
        {selectedEvent === "teddy-day" && <TeddyDay />}
        {selectedEvent === "promise-day" && <PromiseDay />}
        {selectedEvent === "hug-day" && <HugDay />}
        {selectedEvent === "default" && (
          <div>
        <p className="pre-text">Dear Nupur, Will you be my</p>
        <h1 className="title">Valentine 💖</h1>

        <div className="button-area">
          <button
            type="button"
            className="btn yes"
            onClick={() => setShowModal(true)}
          >
            YES!
          </button>

          <EscapeButton onClick={noClicked} />
        </div>

        {showModal && (
          <Modal onClose={() => setShowModal(false)}>
            <ValentineForm onSuccess={() => setShowModal(false)} />
          </Modal>
        )}
      </div>
        )}
      </div>
    </div>
  );
}
