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
      <Seo title='The Upbeats Duo Wedding Band - Windsor &amp; Maidenhead' description="If you're planning a wedding in Windsor &amp; Maidenhead and looking for a small wedding band then you've come to the right place." />
      <section>
      <SimpleBanner title="Wedding Band Windsor &amp; Maidenhead">
        <StaticImage
          className="banner__image"
          src="../images/the-upbeats-duo-party-band.jpeg"
          alt="The Upbeats Duo Party Wedding band"
        />
      </SimpleBanner>
        <BlogSingleStyles>
          <h2 className="blogsingle__title">The Upbeats Duo Wedding Band - Windsor &amp; Maidenhead</h2>
          <p className="blogsingle__date">Friday, June 7th 2019</p>
          <article className="blogsingle__content">
          The Upbeats Duo is Windsor &amp; Maidenhead's best party and wedding small band.
          <br/>
            Organising a wedding is stressful enough, but there is one thing that shouldn't be... choosing a wedding band!
            <br/>
            If you want to have live music at your wedding party as well as (or instead of) a DJ, you've made a great choice. 
            <br/><br/>
            The beauty of The Upbeats duo is that we are a small band (of two), so are much more affordable than a larger band. But we use professional tracks, loops, synths and effects to create a really massive sound. Having a live band play your first dance is a really memorable event and we offer to learn your first dance song for free!
            <br/><br/>
            Our excellent small party and wedding band have performed in Maidenhead, Windsor, Twyford, Ascot, Reading, Newbury, Bracknell and Wokingham.
            <br/>
            The Upbeats Duo are well-acquainted with Windsor &amp; Maidenhead venues and because we live nearby you have the added bonus of not having to pay for our travel or accommodation. 
            <br/><br/>
            We are also (unlike a lot of London wedding bands) extremely affordable and can tailor our services to fit your budget.
            <br/>
            <br/>
            Remember, as well as your first dance will learn any extra songs you want for free. 
            <br/>
            <br/>
            View our setlist <Link to="/repertoire">here</Link>
            <br/>
            <br/>
            To enquire about booking the best small party band click the contact button below. With The Upbeats Duo, you’re in safe hands. 
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
