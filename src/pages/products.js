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
          src="../images/the-upbeats-green-no-logo.jpeg"
          alt="The Upbeats Duo party band"
        />
      </SimpleBanner>
      <Features />
    </>
  )
}

export default products
