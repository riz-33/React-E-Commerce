import * as React from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import pop1 from "../../assets/men1.jpg";
import pop2 from "../../assets/women2.jpg";
import pop3 from "../../assets/kid3.jpg";
import pop4 from "../../assets/hoodie.jpg";

const popularProducts = [
  {
    id: 1,
    name: "Classic Men's T-Shirt",
    price: 19.99,
    category: "men",
    image: pop1,
    description:
      "Comfortable and stylish cotton t-shirt perfect for daily wear.",
  },
  {
    id: 2,
    name: "Women's Summer Dress",
    price: 29.99,
    category: "women",
    image: pop2,
    description: "Lightweight floral dress perfect for summer outings.",
  },
  {
    id: 3,
    name: "Kids' Sports Shoes",
    price: 24.99,
    category: "kids",
    image: pop3,
    description: "Durable and colorful shoes ideal for active kids.",
  },
  {
    id: 4,
    name: "Unisex Hoodie",
    price: 34.99,
    category: "unisex",
    image: pop4,
    description: "Cozy hoodie for chilly days, available in multiple colors.",
  },
];

export default function Popular() {
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    console.log("Add to cart:", product);
    // Implement cart logic here (e.g., context or redux dispatch)
  };

  return (
    <>
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
        Popular Products
      </h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {popularProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 300,
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
    </>
  );
}
