import React from "react"
import YouTube from "react-youtube";
import { VideoPlayerStyles } from "./VideoPlayerStyles";

const Player = ({ setHasLoaded, videoId }) => {
  // Once the YouTube package (react-youtube) has loaded
  // tell the thumbnail it is no longer needed.
  // Play the video.
  const _onReady = (event) => {
    setHasLoaded(true);
    event.target.playVideo();
  };

  return (
    <VideoPlayerStyles>
        <YouTube
        videoId={videoId}
        onReady={_onReady}
        className="videoInner"
        iframeClassName="videoInner"
        />
    </VideoPlayerStyles>
  );
};

export default Player;
