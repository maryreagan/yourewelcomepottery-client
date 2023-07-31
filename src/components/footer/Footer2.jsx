import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import InstagramIcon from "@mui/icons-material/Instagram";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import stripes from "/stripes.png"
import "./Footer2.css"
import { useTheme } from "@mui/material/styles";




export default function Footer2() {
    const theme = useTheme();
    let handleInsta = () =>{
    window.location.href = "https://www.instagram.com/yourewelcomepottery/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
    target="_blank"
  }
  
  let handleEmail = () => {
    let email = "emma.boyd.elliott@gmail.com"
    let mailTo = `mailto:${email}`
    window.location.href = mailTo
  }

  return (
    <Box
      className="footer-wrapper"
      sx={{
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main,
        marginBottom: 0,
      }}
    >
      <Grid
        container
        spacing={3}
        columns={{ xs: 2, sm: 4, md: 12 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <IconButton
            onClick={handleEmail}
            color="secondary"
            aria-label="email"
          >
            <MailOutlineIcon sx={{ fontSize: "2em" }} />
          </IconButton>
          <IconButton
            href="https://www.instagram.com/yourewelcomepottery/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
            target="_blank"
            color="secondary"
            aria-label="instagram"
          >
            <InstagramIcon sx={{ fontSize: "2em" }} />
          </IconButton>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6" color="secondary" align="center" fontFamily="Salsa-Regular">
            GET IN TOUCH
          </Typography>
          <Typography color="secondary" align="center">
            309 Plus Park DriveStudio 147 | Nashville, TN | 37217
          </Typography>
          <Typography color="secondary" align="center">
            By Appointment Only
          </Typography>
        </Grid>
        <Grid item>
          <img
            className="stripe-logo"
            style={{
              width: "11em",
              display: "block",
              margin: "0 auto",
              borderRadius: "3px",
            }}
            src={stripes}
            alt="Powered by stripe"
          />
        </Grid>
      </Grid>
    </Box>
  );
}
