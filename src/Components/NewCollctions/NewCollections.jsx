import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import new1 from "../../assets/men17.jpg";
import new2 from "../../assets/women15.jpg";
import new3 from "../../assets/kid17.jpg";
import new4 from "../../assets/men18.jpg";
import new5 from "../../assets/men14.jpg";
import new6 from "../../assets/women16.jpg";
import new7 from "../../assets/kid18.jpg";
import new8 from "../../assets/women10.jpg";

const newCollections = [
  {
    id: 1,
    name: "Oversized Graphic Tee",
    price: 22.99,
    category: "men",
    image: new1,
    description: "Trendy oversized tee with cool street-style graphics.",
  },
  {
    id: 2,
    name: "Elegant Maxi Dress",
    price: 39.99,
    category: "women",
    image: new2,
    description: "Flowy and elegant dress perfect for special occasions.",
  },
  {
    id: 3,
    name: "Kids Denim Jacket",
    price: 27.99,
    category: "kids",
    image: new3,
    description: "Stylish denim jacket to keep your little one cozy.",
  },
  {
    id: 4,
    name: "Basic Sweatshirt",
    price: 30.99,
    category: "men",
    image: new4,
    description: "Minimalist sweatshirt suitable for all casual occasions.",
  },
  {
    id: 5,
    name: "Slim Fit Jeans",
    price: 35.99,
    category: "men",
    image: new5,
    description: "Classic slim fit jeans for a sharp, casual look.",
  },
  {
    id: 6,
    name: "Chiffon Blouse",
    price: 26.99,
    category: "women",
    image: new6,
    description: "Light chiffon blouse, ideal for office or casual wear.",
  },
  {
    id: 7,
    name: "Kids Cartoon Hoodie",
    price: 24.5,
    category: "kids",
    image: new7,
    description: "Cute hoodie with cartoon print, perfect for toddlers.",
  },
  {
    id: 8,
    name: "Womens Denim Jacket",
    price: 29.99,
    category: "women",
    image: new8,
    description: "Stylish denim jacket to keep you look cozy.",
  },
];

const NewCollections = React.forwardRef((props, ref) => {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
  };

  return (
    <section ref={ref}>
      <h1
        style={{
          margin: 30,
          fontSize: "clamp(2rem, 6vw, 4rem)",
          fontWeight: 700,
          marginBottom: 24,
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        New Collections
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {newCollections.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 300,
              marginBottom: 2,
              transition: "transform 0.3s, box-shadow 0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: 6,
              },
            }}
          >
            <CardActionArea onClick={() => navigate(`/product/${product.id}`)}>
              <CardMedia
                component="img"
                height="350"
                image={product.image}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {product.description}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{ marginTop: 1, fontWeight: 600 }}
                >
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions sx={{ justifyContent: "space-between", px: 2 }}>
              {/* <Button
                size="small"
                variant="outlined"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                View
              </Button> */}
              <Button
                style={{
                  backgroundColor: "#e62e7d",
                  borderColor: "#e62e7d",
                }}
                size="small"
                variant="contained"
                color="secondary"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </div>
    </section>
  );
});

export default NewCollections;
