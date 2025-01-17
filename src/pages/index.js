import React from "react"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Features from "../components/Features/Features"
import MailChimpForm from "../components/MailChimpForm/MailChimpForm"
import YouTubeVideos from "../components/YouTube/YouTubeVideos"


const Index = () => {
  return (
    <>
      <Seo title="Party Band" />
      <BannerModule
        title="The Upbeats Music Duo"
        subTitle="An energetic and established live party duo"
      />
      <BasicTextModule />
      <MailChimpForm />
      <PerksModule />
      <Features />
      <YouTubeVideos vid={1} />
      </>
  )
}

export default Index
