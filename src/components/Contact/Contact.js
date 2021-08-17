import React, { useState } from 'react'
import { ContactStyles } from "./ContactStyles"

import { navigate } from 'gatsby-link'

const Contact = () => {

  function encode(data) {
    return Object.keys(data)
      .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
  }
  
  const [state, setState] = useState({})
  
  const handleChange = (e) => {
            setState({ ...state, [e.target.name]: e.target.value })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }
  
  return (
    <ContactStyles>
      <form onSubmit={handleSubmit} 
              as='form' 
              name="the-upbeats" 
              form-name="the-upbeats" 
              method="POST" 
              action="/"
              data-netlify="true" 
              netlify-honeypot="robo-field" netlify>
                
        <input type="hidden" name="form-name" value="cami-consulting-contact" />
        <div class="hidden">
          <label htmlFor="robo-field">Don’t fill this out if you’re a person: <input name="robo-field" /></label>
        </div>

        <input onChange={handleChange} placeholder="Your name" type="text" name="name" />
        <input onChange={handleChange} placeholder="Your email" type="email" name="email" />
        <textarea onChange={handleChange} placeholder="Your message" name="message" rows="5"></textarea>
        <button className="btn" type="submit">
          Send Message
        </button>
      </form>
    </ContactStyles>
  )
}

export default Contact
