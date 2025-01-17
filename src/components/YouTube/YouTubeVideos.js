import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { YouTubeStyles } from "./YouTubeStyles"
import YouTubePlayer from "./YouTubePlayer"

const getYouTubeVideos = graphql`
  query {
        allContentfulYouTubeVideo {
        edges {
            node {
                videoInternalId
                youTubeLink
                image {
                    gatsbyImageData(width: 500, formats: [AUTO, WEBP])
                }
            }
        }
    }
  }
`

const YouTubeVideos = ({vid}) => {

    const response = useStaticQuery(getYouTubeVideos)
    const videos = response.allContentfulYouTubeVideo.edges

    // const videoDetails = videos.filter(function ({ node }) {
    //   if (vid === node.videoInternalId) {
    //     return node
    //   }
    // })
    const videoDetails = videos.find(function ({ node }) {
      return vid === node.videoInternalId
    })

    //console.log(videoDetails)

    return (
      <YouTubeStyles>
        <div className="features__container">
          <div className="features__container--scroll">
            <YouTubePlayer details={videoDetails} vid={vid}/>                  
            
          </div>
        </div>
      </YouTubeStyles>
    )
}
  
  
export default YouTubeVideos
  