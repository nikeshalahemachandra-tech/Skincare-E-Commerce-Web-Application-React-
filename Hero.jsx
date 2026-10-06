import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import '../styles/Hero.css';
import luxuryFace from "../assets/images/luxury-face.jpg"
import bodyMoisturizer from "../assets/images/body-moisturizer.jpg"
import nightRepair from "../assets/images/night-repair.jpg"



function Hero() {
  const [current, setCurrent] = useState(0);

  const slides = [
    {
       title: "Premium Face Creams",
      subtitle: "Elevate Your Skincare Routine",
      image: luxuryFace
    },
    {
      title: "Luxurious Body Care",
    subtitle: "Pamper Your Entire Body",
    image: bodyMoisturizer
    },
    {
     title: "Night Repair Collection",
    subtitle: "Wake Up to Beautiful Skin",
    image: nightRepair
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 1000 : -1000,
        opacity: 0
      };
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: 0.3 }
    }
  };

  return (
    <div className="hero">
      <motion.div
        className="hero-slide"
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        key={current}
        style={{
          backgroundImage: `url(${slides[current].image})`
        }}
      >
        <div className="hero-overlay">
          <motion.div
            className="hero-content"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="hero-title"
            >
              {slides[current].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-subtitle"
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.button
              className="cta-btn"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(212, 163, 115, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Shop Now
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      <div className="slide-indicators">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            className={`indicator ${index === current ? 'active' : ''}`}
            onClick={() => setCurrent(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  );
}

export default Hero;
