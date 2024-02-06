import React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"

const BasicTextModule = () => {
  return (
    <BasicTextModuleStyles>
      <div className="container">
        <h2>
          The Upbeats Music Duo are a high quality party band currently working aboard the Norwegian Epic, but also available for private booking.
        </h2>
        <p style={{ marginBottom: "60px" }}>
        The Upbeats Duo are the number one party duo available for hire in the UK!
        <br/>
        If you want a big party band sound from a fantastic duo, The Upbeats are everything you could have hoped for.
        <br/>
        <br/>
        Looking for a smaller band for a party? You can be sure The Upbeats duo are always a hit at any event, with thousands of parties, weddings and cruises under our belts.
        <br/>
        <br/>

        <Button text="View Booking Information" as={Link} to="/products" />

        <br/>
        <br/>
        We play classic, upbeat hits starting from current artists all the way back to the 60s, 70s, 80s, 90s and Noughties, including Pop, Funk, Rock Soul and many more. 
        With over 700 songs in our repertoire to choose from, The Upbeats are sure to keep your guests happy and get them dancing.
        <br/>
        <br/>
        We have been gigging professionally for nearly a decade and have performed thousands of shows! If you want a reliable and fun small band with a big party sound, The Upbeats Duo are the best choice!
        <br/>
        <br/>
        We are currently working aboard ships, but whilst we're back in the UK we are based in the North West of England or London, but we travel everywhere! We regularly gig in Greater Manchester, Merseyside, Berkshire, London, Oxfordshire and Surrey, but travel all over the UK, EU and have literally performed around the world!
        </p>

        <Button text="Book us now" as={Link} to="/contact" />

        <br/>
        <br/>

        <Button text="Listen to us" as={Link} to="/repertoire" />

        <br/>
        <br/>

        <Button text="Buy Us A Coffee" as={Link} to="https://www.buymeacoffee.com/theupbeatsduo/e/157143" />
        
        <br/>
        <br/>

        <Button text="Buy Our Album" as={Link} to="https://store.theupbeatsduo.com" />


      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
