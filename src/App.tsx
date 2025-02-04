import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Menu, X, Cpu, Radio, Wifi, Server } from 'lucide-react';

const products = [
  {
    title: "Portable Integrated Telemetry Tracking System",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    icon: <Radio className="w-8 h-8" />,
    description: "Dual Channel Receiver, Bit Synchronizer, Frame Synchronizer, and Decommutator with Diversity Combiner"
  },
  {
    title: "SDR Solutions",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7gcU4EYXd_oh32P5f8EylLIDPyqMQAi5ng&s",
    icon: <Wifi className="w-8 h-8" />,
    description: "IP Mesh MANET SDR with Video, Audio & Data capabilities"
  },
  {
    title: "Rugged Computers",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=800",
    icon: <Server className="w-8 h-8" />,
    description: "Ethernet Switches, Customized System Integration & Test Jig Modules"
  }
];

const RocketWithSmoke = () => (
  <motion.div
    initial={{ y: "100vh" }}
    animate={{ y: "-100vh" }}
    transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }}
    className="fixed z-10 left-1/2 transform -translate-x-1/2"
  >
    <div className="relative">
      <img 
        src="https://images.unsplash.com/photo-1517976487492-5750f3195933?w=200" 
        alt="Rocket"
        className="w-16 h-24 object-cover"
        style={{ filter: 'brightness(1.5)' }}
      />
      {/* Saffron Smoke */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-2 rounded-full"
        style={{ 
          backgroundColor: '#FF9933',
          height: '100px',
          transform: 'translateX(-20px)',
          filter: 'blur(8px)'
        }}
        animate={{
          height: ['100px', '200px', '100px'],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      {/* White Smoke */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-2 rounded-full"
        style={{ 
          backgroundColor: '#FFFFFF',
          height: '100px',
          transform: 'translateX(0px)',
          filter: 'blur(8px)'
        }}
        animate={{
          height: ['100px', '200px', '100px'],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.3
        }}
      />
      {/* Green Smoke */}
      <motion.div
        className="absolute bottom-0 left-1/2 w-2 rounded-full"
        style={{ 
          backgroundColor: '#138808',
          height: '100px',
          transform: 'translateX(20px)',
          filter: 'blur(8px)'
        }}
        animate={{
          height: ['100px', '200px', '100px'],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
          delay: 0.6
        }}
      />
    </div>
  </motion.div>
);

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Cpu className="w-8 h-8 text-blue-500" />
            <span className="ml-2 text-white font-bold">Sri Datta Electronics</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-white hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-white hover:text-blue-400 transition-colors">About</a>
            <a href="#products" className="text-white hover:text-blue-400 transition-colors">Products</a>
            <a href="#brochure" className="text-white hover:text-blue-400 transition-colors">Brochure</a>
            <a href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#about" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>About</a>
              <a href="#products" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Products</a>
              <a href="#brochure" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Brochure</a>
              <a href="#contact" className="text-white hover:text-blue-400 transition-colors" onClick={() => setIsOpen(false)}>Contact</a>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

function App() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  return (
    <div className="relative">
      <Navigation />
      <RocketWithSmoke />

      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#000"
            }
          },
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            links: {
              enable: true,
              color: "#ffffff",
              opacity: 0.4
            },
            move: {
              enable: true,
              speed: 2
            }
          }
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Hero Section */}
      <div id="home" className="relative min-h-screen flex items-center justify-center text-white overflow-hidden pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/50 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <div className="flex justify-center mb-8">
            <Cpu className="w-20 h-20 text-blue-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Sri Datta Electronics
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">
            Pioneering Electronics Solutions for Defence & Government Organizations
          </p>
        </motion.div>
      </div>

      {/* About Section */}
      <motion.section
        id="about"
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-b from-black to-blue-900"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl font-bold mb-8 text-center">About Us</h2>
            <p className="text-lg leading-relaxed">
              We introduce ourselves as Sri Datta Electronics Private Limited, a company incorporated in Hyderabad by a team of professionals from technical and engineering backgrounds. Our fourteen years of experience with Defence & Government Organizations stand as a testament to our dedication to quality and innovation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center text-white">Our Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
              >
                <div className="relative h-48">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white flex items-center">
                    {product.icon}
                    <h3 className="text-xl font-semibold ml-2">{product.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-300">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brochure Section */}
<section id="brochure" className="py-20 bg-gradient-to-b from-gray-800 to-gray-900">
  <div className="container mx-auto px-4">
    <h2 className="text-4xl font-bold mb-8 text-center text-white">Product Brochure</h2>
    <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed space-y-6">
      <p>
        Our brochure (sourced from our SDE_Product_Line.pdf) offers an in-depth view of our cutting-edge technologies, state-of-the-art products and innovative solutions. It encompasses detailed descriptions, technical specifications and the wide range of applications for our products.
      </p>
      <p>
        <strong>Integrated Telemetry System:</strong> This solution provides robust dual-channel reception with built-in synchronizers and diversity combining, ensuring consistent performance in critical environments.
      </p>
      <p>
        <strong>SDR Solutions:</strong> Our Software Defined Radio offerings empower secure, agile communication with support for video, audio and data, making them ideal for dynamic MANET environments.
      </p>
      <p>
        <strong>Rugged Computers:</strong> Designed for resilience, our computers and network solutions are engineered for harsh operational conditions and mission-critical applications.
      </p>
      <div className="border border-dashed border-white p-4 text-center">
        Image Placeholder – Brochure Cover
      </div>
      <div className="border border-dashed border-white p-4 text-center">
        Image Placeholder – Product Details
      </div>
      <p>
        For more detailed technical specifications and design philosophies, please refer to our brochure. This document reflects our commitment to quality and innovation, merging practical engineering with visionary technology.
      </p>
    </div>
  </div>
</section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative py-20 bg-gradient-to-b from-black to-blue-900 min-h-screen flex items-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-white text-center">
            <motion.h2 
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8"
            >
              Contact Us
            </motion.h2>
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4"
            >
              <p>
                <strong>Address:</strong> F. No: 201, Chaitnya Chambers, Sai Nagar,
                <br />Chaitanyapuri, Hyderabad-500060 (TS)
              </p>
              <p>
                <strong>Email:</strong> sales@sridattaelectronics.com
              </p>
              <p>
                <strong>Phone:</strong> 040-35868174
                <br />
                <strong>Mobile:</strong> +91-9492430198
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default App;