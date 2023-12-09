import React from "react"
import {
  FaTwitterSquare as Twitter,
  FaEnvelope,
  FaSoundcloud,
  FaYoutube,
  FaInstagram
} from "react-icons/fa"

export const menuItems = [
  {
    path: "/",
    text: "Home",
  },
  {
    path: "/products/",
    text: "Bookings",
  },
  {
    path: "/blogs/",
    text: "blogs",
  },
  {
    path: "/repertoire/",
    text: "repertoire",
  },
  {
    path: "/contact/",
    text: "contact",
  },
]

export const socialItems = [
  {
    path: "mailto:theupbeatsmusicduo@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    path: "https://www.instagram.com/theupbeatsduo/",
    icon: <FaInstagram />,
  },
  {
    path: "https://soundcloud.com/user-996705933",
    icon: <FaSoundcloud />,
  },
  {
    path: "https://www.youtube.com/watch?v=pf4O9eDGHm4",
    icon: <FaYoutube />,
  },
]
