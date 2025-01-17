import React, { useState, lazy, Suspense} from "react"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { YouTubeStyles } from "./YouTubeStyles"
import { FaMusic, FaYoutube } from "react-icons/fa";

// Use React.lazy to create a new chunk.
const Player = lazy(() => import("../VideoPlayer/VideoPlayer"));


const YouTubePlayer = ({ details }) => {

    const { youTubeLink, image } = details.node
    

    const thumbnailImage =  getImage(image)
    //console.log(image)

  // These two states handle the button press, and
  // the loading of the YouTube iframe.
  const [showVideo, setShowVideo] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  

  return (
    <>
        <YouTubeStyles>
            <div className="container">
                <div className="videoRatio">
                    {
                    // If the button has not been pressed, and the YouTube
                    // video is not loading - keep the button rendered.
                    }
                    {(!showVideo || !hasLoaded) && (
                        <button
                            className="thumbnailButton"
                            onClick={() => setShowVideo(true)}
                
                        >
                            <div className="videoInner">
                                <GatsbyImage
                                    className="c-youtube__thumbnail"
                                    image={thumbnailImage}
                                    alt="The Upbeats Duo"
                                    loading="lazy"
                                />
                                <FaYoutube alt="Play Video"
                                    
                                    className="playIcon"/>
                            </div>
                        </button>
                    )}
                    {showVideo && (
                    <Suspense  fallback={
                    <div className="videoInner">
                        <GatsbyImage
                            className="c-youtube__thumbnail"
                            image={thumbnailImage}
                            alt="The Upbeats Duo"
                            loading="lazy"
                        />
                        <FaMusic 
                            className="playIcon"/>
                    </div>
                    }
                    >
                        <Player videoId={youTubeLink} setHasLoaded={setHasLoaded} />
                    </Suspense>
                    )}
                </div>
            </div>
        </YouTubeStyles>
        
    </>
  )
}


export default YouTubePlayer
