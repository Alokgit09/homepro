import React, { useState } from "react";
import { useRef } from "react";
import "./Player.css";

const Player = () => {

    const [mute, setMute] = useState(true);

    const VideoRef = useRef();

    console.log(VideoRef);

    const handlePlay = () => {
        VideoRef.current.play();
    }

    const handlePause = () => {
        VideoRef.current.pause();
    }

    const handleMuted = () => {
        setMute(!mute)

        if(mute) {
            VideoRef.current.muted = true;
        }else {
            VideoRef.current.muted = false; 
        }
        
    }


  return (
    <>
      <div className="video_player">
        <div className="video_clip">
          <video controls ref={VideoRef}>
            <source src="/video/movie.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="buttons">
          <button className="play-btn" onClick={handlePlay}>Play</button>
          <button className="pause-btn" onClick={handlePause}>Pause</button>
          <button className="mute-btn" onClick={handleMuted}>{mute ? "🔊" : "🔇"}</button>
        </div>
      </div>
    </>
  );
};

export default Player;
