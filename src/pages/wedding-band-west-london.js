import React from "react"
import { Link } from "gatsby"
import Seo from "../components/SEO"
import { BlogSingleStyles } from "../components/Blog/BlogStyles"
import Button from "../components/Button/Button"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import { StaticImage } from "gatsby-plugin-image"

const Bold = ({ children }) => <strong>{children}</strong>
const Italic = ({ children }) => <em>{children}</em>
const Text = ({ children }) => <p>{children}</p>

const Blog = () => {

  return (
    <>
      <Seo title='The Upbeats Duo Wedding Band - West London' description="If you're planning a wedding in West London and looking for a small wedding band then you've come to the right place." />
      <section>
      <SimpleBanner title="Wedding Band West London">
        <StaticImage
          className="banner__image"
          src="../images/the-upbeats-duo-party-band-2.jpeg"
          alt="The Upbeats Duo Party Wedding band"
        />
      </SimpleBanner>
        <BlogSingleStyles>
          <h2 className="blogsingle__title">The Upbeats Duo Wedding Band - West London</h2>
          <p className="blogsingle__date">Friday, June 7th 2019</p>
          <article className="blogsingle__content">
          The Upbeats Duo is West London's choice party and wedding band.
          <br/>
            <br/>
            Choosing a band for your wedding as well as (or instead of) a DJ is a fantastic choice. <br/><br/>
            The beauty of The Upbeats duo is that we are a small band (of two), so are much more affordable than a larger band. However we use professional tracks, loops, synths and effects to create a really massive sound. Having a live band play your first dance is a really memorable event and we offer to learn your first dance song for free!
            <br/>
            Our excellent party and wedding band have performed in venues in Chiswick, Richmond, Notting Hill, Park Royal, Hammersmith, Kensington, Southall, Ealing, Hounslow, Brent and Acton.
            <br/>
            The Upbeats Duo are well-acquainted with West London venues and because we live nearby you have the added bonus of not having to pay for our travel or accommodation. 
            <br/>
            We are also (unlike a lot of London wedding bands) really affordable and can tailor our offering to fit your budget.
            <br/>
            Remember, as well as your first dance will learn any extra songs you want for free. 
            <br/>
            <br/>
            View our setlist <Link to="/repertoire">here</Link>
            <br/>
            To enquire about booking this awesome band click the contact button below. With thousands of shows played…With The Upbeats Duo, you’re in safe hands. 
            <div className="blogsingle__back">
              <Button to="/contact" text="Contact" as={Link} />
            </div>
          </article>
        </BlogSingleStyles>
      </section>
    </>
  )
}

export default Blog
