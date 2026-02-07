import { useState } from "react";

export default function ValentineForm({ onSuccess }) {
  const [showUrbanInput, setShowUrbanInput] = useState(false);
  const [showAmazonInput, setShowAmazonInput] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "cc1be779-4934-457d-8151-1bef847f9f45");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      alert("Looking forward to make you feel special!! 💖");
      onSuccess();
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
        Pick Anything from UrbanClap and I will book it

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
          onChange={(e) => setShowAmazonInput(e.target.checked)}
        />
        Anything from your Amazon Wish List

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
    </form>
  );
}
