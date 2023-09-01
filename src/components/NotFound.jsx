
import { Link } from "react-router-dom"
import { Typography } from '@mui/material';

import "./NotFound.css"

function NotFound() {
  return (
    <>
      <Typography variant="h5" color="primary" align="center" marginTop="2em">
        Looks like there&#39;s nothing on this page!
      </Typography>

      <Link to="/">
        <Typography color="primary" align="center" marginTop="1em" sx={{ cursor: "pointer"}} >
          Click to return to homepage
        </Typography>
      </Link>

    </>
  );
}

export default NotFound