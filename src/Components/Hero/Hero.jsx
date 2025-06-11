import React from 'react'
import { Carousel } from "antd";
import { Button } from "antd";
import Hero1 from "../../assets/hero1.jpeg";
import Hero2 from "../../assets/hero2.jpg";
import Hero3 from "../../assets/hero3.jpg";
import Hero4 from "../../assets/hero4.jpg";
import { Link } from "react-router-dom";

const slides = [
  {
    image: Hero1,
    title: "Discover Men's Fashion",
    buttonText: "Shop Now",
    link: "/mens",
  },
  {
    image: Hero2,
    title: "Women's New Arrivals",
    buttonText: "Explore",
    link: "/womens",
  },
  {
    image: Hero3,
    title: "Trendy Styles for Kids",
    buttonText: "Browse Kids",
    link: "/kids",
  },
  {
    image: Hero4,
    title: "Exclusive Deals Await",
    buttonText: "Start Saving",
    link: "#collections",
  },
];

const Hero = ({ onScrollClick }) => (
  <Carousel autoplay effect="fade" dots>
    {slides.map((slide, index) => (
      <div key={index} style={{ position: "relative" }}>
        <img
          src={slide.image}
          alt={`Slide ${index + 1}`}
          style={{
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            filter: "brightness(60%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            color: "#fff",
            padding: "0 20px",
            width: "100%",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 6vw, 4rem)",
              fontWeight: 700,
              marginBottom: 24,
              lineHeight: 1.2,
            }}
          >
            {slide.title}
          </h1>

          <Link to={slide.link}>
            <Button
              type="primary"
              size="large"
              style={{
                backgroundColor: "#e62e7d",
                borderColor: "#e62e7d",
                fontWeight: 600,
                padding: "12px 28px",
                fontSize: "1rem",
              }}
              onClick={() => {
                if (slide.buttonText === "Start Saving") {
                  onScrollClick();
                }
              }}
            >
              {slide.buttonText}
            </Button>
          </Link>
        </div>
      </div>
    ))}
  </Carousel>
);

export default Hero;
