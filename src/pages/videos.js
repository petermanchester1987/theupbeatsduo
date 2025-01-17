import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import YouTubeVideos from "../components/YouTube/YouTubeVideos"

const videos = () => {
  return (
    <>
      <Seo title="Videos" />
        <SimpleBanner title="Some Of Our Recent Vids">
            <StaticImage
            className="banner__image"
            src="../images/the-upbeats-green-no-logo.jpeg"
            alt="The Upbeats Duo music party duo"
            />
        </SimpleBanner>
        <div className="container">
            <div className="outerDiv">
            <p>General Cruise Demo 2025</p>
                <YouTubeVideos vid={1} />
            </div>
            <div className="outerDiv">
                <p>Party Demo 2025</p>
                <YouTubeVideos vid={2} />
            </div>
            <div className="outerDiv">
                <p>Party Demo 2022</p>
                <YouTubeVideos vid={3} />
            </div>
            <div className="outerDiv">
                <p>Theatre Show Promo 2025</p>
                <YouTubeVideos vid={4} />
            </div>
        </div>
    </>
  )
}

export default videos
