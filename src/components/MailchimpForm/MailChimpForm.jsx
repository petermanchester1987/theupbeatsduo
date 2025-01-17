import React, { useState } from "react"
import addToMailchimp from "gatsby-plugin-mailchimp"
import Button from "../Button/Button"
import { MailChimpFormStyles } from "./MailChimpFormStyles"

const MailChimpForm = () => {

    const [state, setState] = useState({})
  
    const handleChange = (e) => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

   const handleSubmit = async e => {
    e.preventDefault()
    //console.log(state)
    //const result = await addToMailchimp(state.EMAIL, {FNAME: state.FNAME, LNAME: state.LNAME} )

    async function go() {
      try{
        const res = await addToMailchimp(state.EMAIL, {FNAME: state.FNAME, LNAME: state.LNAME} )
        setState({...state, result: res.result, msg: res.msg})
      } catch(err) {
        setState({...state, result: 'error', msg: err.msg})
      }        
    }
    go()
  }

    return state.result === "success" ? (
      <MailChimpFormStyles>
        <div className="outer">
          <div className="container">
            <div className="div">
              <div>SUCCESS</div>
              <p>{state.msg}</p></div>
            </div>
        </div>
      </MailChimpFormStyles>
      ) : state.result === "error" ? (
       <MailChimpFormStyles>
        <div className="outer">
              <div className="container">
                <form onSubmit={handleSubmit}>
                  <p>Uh Oh<br/>Please check the details and resubmit</p>
                    <div className="mc-field-group">
                      <label htmlFor="mce-EMAIL">Email </label>
                      <input
                      id="mce-EMAIL"
                      label="Email"
                      type="email"
                      name="EMAIL"
                      autoComplete="email"
                      variant="outlined" 
                      value={state.EMAIL ?? ""}
                      onChange={handleChange} 
                      placeholder="Your Email" 
                      requiredtype="email" 
                      />
                    </div>

                    <div className="mc-field-group">
                      <label htmlFor="mce-FNAME">First Name </label>
                      <input type="text" 
                      name="FNAME" 
                      id="mce-FNAME" 
                      value={state.FNAME ?? ""}
                      onChange={handleChange}  />
                    </div>
                    <div className="mc-field-group">
                      <label htmlFor="mce-LNAME">Last Name </label>
                      <input type="text" 
                      name="LNAME" 
                      id="mce-LNAME" 
                      value={state.LNAME ?? ""}
                      onChange={handleChange}  />
                    </div>
                    <br />
              <div>
                <Button type="submit" text={"Join Mailing List"}/>
              </div>
            </form>
              <div class="drops">
                <div class="drop drop-1"></div>
                <div class="drop drop-2"></div>
                <div class="drop drop-3"></div>
                <div class="drop drop-4"></div>
                <div class="drop drop-5"></div>
              </div>
            </div>
        </div>
        </MailChimpFormStyles>
      ) : (
        <MailChimpFormStyles>
        <div className="outer">
            <div className="container">
            <form onSubmit={handleSubmit}>
            <p>Sign up for our Newsletter</p>
              <div className="mc-field-group">
                <label htmlFor="mce-EMAIL">Email </label>
                  <input
                  id="mce-EMAIL"
                  label="Email"
                  type="email"
                  name="EMAIL"
                  autoComplete="email"
                  variant="outlined" 
                  value={state.EMAIL ?? ""}
                  onChange={handleChange} 
                  placeholder="Your Email" 
                  requiredtype="email" 
                  />
              </div>

              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">First Name </label>
                <input type="text" 
                name="FNAME" 
                id="mce-FNAME" 
                value={state.FNAME ?? ""}
                onChange={handleChange}  />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-LNAME">Last Name </label>
                <input type="text" 
                name="LNAME" 
                id="mce-LNAME" 
                value={state.LNAME ?? ""}
                onChange={handleChange}  />
              </div>
            
              <br />
            <div>
              <Button type="submit" text={"Join Mailing List"}/>
            </div>
            </form>
            <div class="drops">
              <div class="drop drop-1"></div>
              <div class="drop drop-2"></div>
              <div class="drop drop-3"></div>
              <div class="drop drop-4"></div>
              <div class="drop drop-5"></div>
            </div>
            </div>
        </div>
        </MailChimpFormStyles>
      )
}

export default MailChimpForm