import React from 'react'
import MarkunreadIcon from '@mui/icons-material/Markunread';
import "./footer.css"
function Footer() {
  let handleEmail = () => {
    let email = "jonathan.amsalem@gmail.com"
    let mailTo = `mailto:${email}`
    window.location.href = mailTo
  }
  return (
    <div id="footer">
      <h3 >GET IN TOUCH</h3>
      <h4>Location: 309 Plus Park DriveStudio 147, Nashville, TN 37217</h4>
      <h4>Hours of Operations: By Appointment Only</h4>
      <button onClick={handleEmail}>
      <MarkunreadIcon fontSize="large" />
      </button>
        
        
    
        </div>
  )
}

export default Footer