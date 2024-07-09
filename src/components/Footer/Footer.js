import React from "react"
import { Link } from "gatsby"
import { menuItems, socialItems } from "../../constants/links"
import { FooterStyles } from "./FooterStyles"

const Footer = () => {

  const current = new Date();
  const currentYear = current.getFullYear();
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__menu">
          <ul>
            {menuItems.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path} activeClassName="menu__item--active">
                    {item.text}
                    <span>.</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social__menu">
          <ul>
            {socialItems.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item.path}
                    target="_blank"
                    rel="nofollow noreferrer noopener"
                  >
                    {item.icon}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
        <div className="social__menu">
          <ul>
          <li><a href="https://www.poptop.uk.com/supplier/the-upbeats-duo/" target="_blank"><img src="https://www.poptop.uk.com/ranking/the-upbeats-duo/GoldPoptopFeaturedSupplierRating.png" width="160px" height="160px" /></a></li>
          <li><a href="https://www.lastminutemusicians.com/members/theupbeatsduo.html" target="_blank"><img src="https://www.lastminutemusicians.com/images/v5/LMM-White.png" alt="The Upbeats Duo on Last Minute Musicians" width="160px" height="160px"></img></a></li>
          </ul>
        </div>
        <div className="copyright">
          <p>&copy; {currentYear} The Upbeats Duo.
            Designed & developed by{" "}
            <a
              href="https://www.petermanchesterweb.com"
              target="_blank"
              rel="noreferrer"
            >
              Peter Manchester
            </a>
            <span>.</span>
          </p>
        </div>
      </div>
    </FooterStyles>
  )
}

export default Footer
