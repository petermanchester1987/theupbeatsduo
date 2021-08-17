import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import Perk from "./Perk"

const PerksModule = () => {
  return (
    <PerksModuleStyles>
      <StaticImage
        className="perks__image--bg"
        src="../../images/microphone.jpeg"
        alt="The Upbeats Duo party band microphone"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container">
        <h2> Recent Reviews</h2>
        <Perk
          title="Toni Norman (Open Weekend) 10/10"
          content="Rachel and Peter were the ultimate professionals. A last minute booking from us they couldn't have been more accommodating. And despite the pretty rubbish weather and subsequent lack of numbers at the event they continued to play with enthusiasm throughout, putting on a great show. They were fabulous and we certainly wouldn't hesitate in recommending them to anyone. We'll certainly book them again."
        >
        </Perk>
        <Perk
          title="Gabrielle &amp; Nick (70th Birthday Party) 10/10"
          content=" Rachel and Peter are an absolutely delightful couple, immensely talented with various instruments and singing. The dance floor was hopping from the get-go until we had to finish. The encores would still be going on now, but sadly we had to eventually stop the evening. Have your entertainment provided by Rachel and Peter and you won’t be disappointed. Oh and they’re both utterly gorgeous too!"
        >
        </Perk>
        <Perk
          title="David Cardno (50th Birthday Party) 10/10"
          content="We hired the Upbeats Duo for my wifes 50th birthday party and they were genuinely fantastic. Communication throughout the booking process and run up to the party was first class.  The performance itself was really good and they had added a couple of my wife's favourites into the set. We were a fairly small group of fifty but that did not dampen the Upbeats enthusiasm. If you booked them for an event I can't see how you would be disappointed."
        >
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}

export default PerksModule
