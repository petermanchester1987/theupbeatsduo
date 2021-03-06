import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "../components/Contact/Contact"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <SimpleBanner title="Get in touch">
        <StaticImage
          className="banner__image"
          src="../images/the-upbeats-garden.jpg"
          alt="The Upbeats Duo music party duo"
        />
      </SimpleBanner>
      <Contact />
    </>
  )
}

export default contact
