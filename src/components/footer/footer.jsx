import React from 'react'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import Link from '@mui/material/Link';

import "./footer.css"
import stripes from "../../../public/stripes.png"
function Footer() {
  let handleEmail = () => {
    let email = "jonathan.amsalem@gmail.com"
    let mailTo = `mailto:${email}`
    window.location.href = mailTo
  }
  return (
    <div id ="footerMain">
      <h3>GET IN TOUCH</h3>
  <div id="footer">
     <div id="contactInfo">
      <h4>Location: 309 Plus Park DriveStudio 147, Nashville, TN 37217</h4>
      <h4>Hours of Operations: By Appointment Only</h4>
      </div>
      <span class="divider1" />
      <div id= "email">
      <button onClick={handleEmail}>
      <MarkunreadIcon fontSize="large" />
      </button>
      <Link id="newsletter"
        href="javascript:void(
        window.open(
          'https://form.jotform.com/232046323497153',
          'blank',
          'scrollbars=yes, 
          toolbar=no,
          width=700,
          height=500' 
        )
      )
    "
    color = "inherit"
      >
        
        Get Our Newsletter!
        </Link>

      </div>
      <span class="divider" />
      <img src={stripes} alt="P" />
    </div>
    </div>
    
    
  );
}

export default Footer