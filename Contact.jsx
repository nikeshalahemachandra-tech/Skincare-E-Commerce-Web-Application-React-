import { motion } from 'framer-motion';
import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

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

  const contactInfo = [
    {
      icon: '📍',
      title: 'Address',
      content: '123 Beauty Lane, Colombo'
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+94 70 123 4567'
    },
    {
      icon: '✉️',
      title: 'Email',
      content: 'info@luxurecream.com'
    },
    {
      icon: '🕐',
      title: 'Hours',
      content: 'Mon - Fri: 9am - 6pm\nSat: 10am - 4pm'
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <motion.section
        className="contact-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="contact-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We'd love to hear from you. Let's talk!
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info & Form */}
      <motion.section
        className="contact-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="contact-container">
          {/* Contact Info Cards */}
          <motion.div className="contact-info-grid" variants={containerVariants}>
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="info-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                <p>{info.content}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="contact-form-container"
            variants={itemVariants}
          >
            <h2>Send us a Message</h2>
            
            {submitted && (
              <motion.div
                className="success-message"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✅ Thank you! Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 123-4567"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="subject">Subject *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help?"
                />
              </motion.div>

              <motion.div className="form-group" variants={itemVariants}>
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Your message here..."
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.section>

      {/* Map Section */}
      <motion.section
        className="contact-map"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2>Find Us On The Map</h2>
        <iframe
          title="location-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.7485628265407!2d79.8512203!3d6.913132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25960d359dbbf:0xd64947e9ab7a4c4f!2sColombo%2003!5e0!3m2!1sen!2slk!4v1234567890"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.section>

      {/* FAQ Section */}
      <motion.section
        className="contact-faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h2>Frequently Asked Questions</h2>
        <motion.div className="faq-grid" variants={containerVariants}>
          <motion.div className="faq-item" variants={itemVariants}>
            <h3>What are your shipping times?</h3>
            <p>We typically ship within 1-2 business days. Standard delivery takes 5-7 business days.</p>
          </motion.div>
          <motion.div className="faq-item" variants={itemVariants}>
            <h3>Do you offer returns?</h3>
            <p>Yes! We offer 30-day returns on all products if you're not completely satisfied.</p>
          </motion.div>
          <motion.div className="faq-item" variants={itemVariants}>
            <h3>Are your products cruelty-free?</h3>
            <p>Yes, all our products are 100% cruelty-free and vegan-friendly.</p>
          </motion.div>
          <motion.div className="faq-item" variants={itemVariants}>
            <h3>Can I use multiple products together?</h3>
            <p>Absolutely! Our products are designed to work together as a complete skincare system.</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}

export default Contact;