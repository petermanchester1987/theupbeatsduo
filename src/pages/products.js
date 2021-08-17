import React from "react"
import Features from "../components/Products/Products"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const products = () => {
  return (
    <>
      <Seo title="Booking" />
      <SimpleBanner title="Bookings">
        <StaticImage
          className="banner__image"
          src="../images/The-Upbeats-Duo-Photo-web-optimized-wide.jpeg"
          alt="Apple iPhone face down"
        />
      </SimpleBanner>
      <Features />
    </>
  )
}

export default products
