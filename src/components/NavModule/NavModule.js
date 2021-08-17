import React, { useContext } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import MenuContext from "../MenuContext"
import { NavModuleStyles } from "./NavModuleStyles"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
} from "./NavAnim"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"

  {/* {title}
  <span>.</span> */}

const NavModule = () => {
  const [isOpen, setNav] = useContext(MenuContext)

  const toggleNav = () => {
    setNav(isOpen => !isOpen)
  }

  const { title } = UseSiteMetadata()

  return (
    <NavModuleStyles>
      <div className="nav">
        <div className="container">
          <motion.button
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={`hamburger${isOpen ? " open" : ""}`}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </motion.button>

          {title && (
            <div className="logo">
              <Link to="/">
                <StaticImage
                  className="upbeats-logo"
                  src="../../images/logos/the-upbeats-logo-gradient.png"
                  alt="The Upbeats Music Duo logo"
                  layout="constrained"
                  placeholder="tracedSVG"
                />
              </Link>
            </div>
          )}
        </div>
      </div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <ul>
          {menuItems.map((item, index) => (
            <li onClick={toggleNav} key={index}>
              <Link to={item.path} activeClassName="menu__item--active">
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
