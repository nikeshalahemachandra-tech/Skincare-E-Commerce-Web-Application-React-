import { motion } from 'framer-motion';
import '../styles/About.css';

function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    {
      icon: '✨',
      title: 'Premium Quality',
      description: 'Crafted with the finest ingredients sourced globally'
    },
    {
      icon: '🌿',
      title: 'Natural Ingredients',
      description: 'Pure, organic formulations free from harmful chemicals'
    },
    {
      icon: '🔬',
      title: 'Lab Tested',
      description: 'Dermatologically tested and approved by experts'
    },
    {
      icon: '💚',
      title: 'Eco-Friendly',
      description: 'Sustainable packaging and ethical sourcing practices'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <motion.section
        className="about-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Luxury skincare for everyone
          </motion.p>
        </div>
      </motion.section>

      {/* Story Section */}
      <motion.section
        className="about-story"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="story-container">
          <motion.div className="story-content" variants={itemVariants}>
            <h2>Our Story</h2>
            <p>
              Founded in 2015, our company was born from a passion for creating luxurious skincare products that everyone can afford. We believe that beautiful, healthy skin is a right, not a privilege.
            </p>
            <p>
              Our mission is to provide high-quality, natural skincare solutions that transform your daily routine into a spa experience. Every product is carefully formulated to deliver results without compromising on safety or quality.
            </p>
            <p>
              Today, we're proud to serve thousands of customers worldwide who trust us with their skincare needs.
            </p>
          </motion.div>
          <motion.div className="story-image" variants={itemVariants}>
            <img src="our.jpg" alt="Our story" />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        className="about-features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Why Choose Us</h2>
        <motion.div className="features-grid" variants={containerVariants}>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        className="about-team"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Our Team</h2>
        <motion.div className="team-grid" variants={containerVariants}>
          <motion.div className="team-member" variants={itemVariants}>
            <img src="1.jpg" />
            <h3>Sarah Johnson</h3>
            <p>Founder & CEO</p>
          </motion.div>
          <motion.div className="team-member" variants={itemVariants}>
            <img src="2.jpg" />
            <h3>Emma Davis</h3>
            <p>Product Developer</p>
          </motion.div>
          <motion.div className="team-member" variants={itemVariants}>
            <img src="3.jpg" alt="Team member" />
            <h3>Michael Chen</h3>
            <p>Quality Assurance</p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        className="about-values"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Our Values</h2>
        <motion.div className="values-container" variants={containerVariants}>
          <motion.div className="value" variants={itemVariants}>
            <h3>Quality</h3>
            <p>We never compromise on the quality of our products and services</p>
          </motion.div>
          <motion.div className="value" variants={itemVariants}>
            <h3>Integrity</h3>
            <p>Honesty and transparency in all our business dealings</p>
          </motion.div>
          <motion.div className="value" variants={itemVariants}>
            <h3>Innovation</h3>
            <p>Constantly researching and improving our formulations</p>
          </motion.div>
          <motion.div className="value" variants={itemVariants}>
            <h3>Sustainability</h3>
            <p>Committed to protecting our planet for future generations</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default About;