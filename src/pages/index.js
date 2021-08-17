import React from "react"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"

const Index = () => {
  return (
    <>
      <Seo title="Party Band Maidenhead &amp; Windsor" />
      <BannerModule
        title="The Upbeats Music Duo"
        subTitle="An energetic and established live party duo"
      />
      <BasicTextModule />
      <PerksModule />
      <Features />
    </>
  )
}

export default Index
