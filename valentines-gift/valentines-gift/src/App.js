import React, { useState, useEffect } from "react";
import "./App.css";
import bgMusic from "./../src/regal.mp3"; // Add your mp3 file in images folder
import homeImage from "./images/home.jpg"; // Replace with actual file names
import flowersImage from "./images/3.png";
import memoriesImage from "./images/2.png";
import valentineImage from "./images/4.png";
import lastPageImage from "./images/5.png"; // Full-page image for last screen

function App() {
  const [page, setPage] = useState(0);
  const [audio] = useState(new Audio(bgMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isPlaying) {
      audio.play().catch((error) => console.log("Playback failed", error));
    } else {
      audio.pause();
    }
  }, [isPlaying, audio]);

  const nextPage = () => setPage(page + 1);

  return (
    <div className="app">
      <div className="hearts-container">
        {/* Floating hearts will be generated using JavaScript */}
      </div>

      {page === 0 && (
        <div className="container">
          <h1>It all started when you replied to my stories and called me 'kuya'..</h1>
          <img src={homeImage} alt="Our beginning" className="content-image" />
          <button onClick={nextPage} className="btn">Next</button>
        </div>
      )}

      {page === 2 && (
        <div className="container">
          <h1>For You, My Love 💐</h1>
          <p>Like these flowers, my love for you grows every day. 🌸</p>
          <img src={flowersImage} alt="Flowers" className="content-image" />
          <button onClick={nextPage} className="btn">Next</button>
        </div>
      )}

      {page === 1 && (
        <div className="container">
          <h1>Our Journey Together ❤️</h1>
          <p>Now we’ve faced challenges, but we’ve overcome them together. I promise to be more patient because I love you so much. 💖</p>
          <img src={memoriesImage} alt="Our Memories" className="content-image" />
          <button onClick={nextPage} className="btn">Next</button>
        </div>
      )}

      {page === 3 && (
        <div className="container">
          <h1>Will you be my 4ever Valentine? 💖</h1>
          <p>There’s no one else I’d rather spend this day with than you. 💕</p>
          <img src={valentineImage} alt="Valentine" className="content-image" />
          <button onClick={nextPage} className="btn">Next</button>
        </div>
      )}

      {page === 4 && (
        <div className="full-page">
          <img src={lastPageImage} alt="Last Page" className="full-image" />
          <h1 className="last-message">I love you so much, Loves ko! ❤️</h1>
        </div>
      )}

      <button className="music-btn" onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Pause Music 🎵" : "Play Music 🎶"}
      </button>
    </div>
  );
}

export default App;
