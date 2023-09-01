
import headshot from "../../assets/headshot.jpg"
import studio from "../../assets/studio.jpg"
import "./Bio.css"
import {Typography} from "@mui/material";




function Bio() {
  
  return (
    <>
      <div className="bio-container">
        <div className="biocard">
          <img src={headshot} alt="<Emma's headshot>" />
          <Typography className="text" align="justify" >
            I am Emma Boyd Elliott, potter and creator of You’re Welcome
            Pottery. Two years ago, I began working with clay in sculpture and
            pottery classes and fell in love with making functional pottery on
            the wheel. In 2022, my husband bought me my own pottery wheel. By
            early 2023, I was moving into my own little studio in the Kreate Hub
            building in Nashville, Tennessee, where I spent lots of time making
            a mess!
          </Typography>
        </div>

        <div className="biocard">
          <img src={studio} alt="<Emma's studio>" />
          <Typography className="text" align="justify" >
            I am still learning and growing as an artist, and I am thrilled to
            be sharing my adventures in ceramics with you as I progress. I have
            also enjoyed teaching true beginners the basics of learning to throw
            on the potter’s wheel and may expand those offerings in the future.
            <br />
            <br />I am also a lawyer, knitter, and banana bread baker, am in a
            curling league, and love snuggling with my two three-legged dogs.
          </Typography>
        </div>
      </div>

      
    </>
  );
}

export default Bio