import React, { useRef, useState } from "react";
import video from "./videos/video.mp4";
import "./Player.css"; // Import CSS file

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0; // Reset video to start
    videoRef.current.play(); // Play the video
    setIsPlaying(true);
  };

  return (
    <div className="player-container">
      <div className="video-container">
        <video ref={videoRef} height={360} width={640} controls>
          <source src={video} type="video/mp4" />
        </video>
        <div className="controls">
          <button onClick={handlePlay}>{isPlaying ? "Pause" : "Play"}</button>
          <button onClick={handleReplay}>Replay</button>
        </div>
      </div>
    </div>
  );
};

export default Player;
