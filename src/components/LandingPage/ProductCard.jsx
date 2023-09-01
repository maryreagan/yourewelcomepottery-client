/* eslint-disable react/prop-types */
import {useState} from 'react'
import { styled } from "@mui/material/styles";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Button, CardActions } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useTheme } from "@mui/material/styles";
import {Link} from "react-router-dom"

const ExpandMore = styled((props) => {
  const {  ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function ProductCard(props) {
  const { product, onAddToCart } = props
    const [expanded, setExpanded] = useState(false);
    
    const theme = useTheme();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleAddToCart = () => {
    onAddToCart(product);
  };



  return (
    // On click, take user to product's individual page
    <Card sx={{ maxWidth: 300 }} elevation={24} >
      <Link to={`/products/${product._id}`}>
      <CardMedia
        // onClick={reroute}
        component="img"
        style={{ height: 300, width: 300 }}
        image={product.multipleImgs[0]}
        alt={product.altText}
      />
      </Link>
      <CardContent sx={{ backgroundColor: theme.palette.secondary.main }} to={`/products/${product._id}`}>
        <Typography gutterBottom variant="h6" component="div">
          {product.productName}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.secondary">
          ${product.price}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        {product.quantity > 0 ? (
          <Button onClick={handleAddToCart} startIcon={<ShoppingCartIcon />}>
            Add to Cart
          </Button>
        ) : (
          <Typography paragraph color="primary.main">
            SOLD OUT
          </Typography>
        )}
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{product.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}

export default ProductCard


