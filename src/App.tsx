import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Parallax } from 'react-parallax';
import Particles from 'react-particles';
import { loadSlim } from "tsparticles-slim";
import { Menu, X, Cpu, Radio, Wifi, Server, Satellite, Cable, Airplay, RadioTower, RefreshCcw, Plug, Waves, Battery, Bolt, Signal, Code } from 'lucide-react';

const products = [
  {
    title: "Telemetry Tracking Stations",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800",
    icon: <Satellite className="w-8 h-8" />, 
    description: "Advanced telemetry tracking stations for precise data acquisition."
  },
  {
    title: "Mil-Grade Missile Cable Assemblies",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800",
    icon: <Cable className="w-8 h-8" />, 
    description: "High-durability missile cable assemblies meeting military standards."
  },
  {
    title: "Telemetry Sub-systems",
    image: "https://images.unsplash.com/photo-1598889484010-a3bf4f77e527?w=800",
    icon: <Cpu className="w-8 h-8" />, 
    description: "Ground Telemetry Checkout Systems ensuring reliable performance."
  },
  {
    title: "Airborne & Drone Telemetry Systems",
    image: "https://images.unsplash.com/photo-1581092331646-d8e27c923b78?w=800",
    icon: <Airplay className="w-8 h-8" />, 
    description: "State-of-the-art airborne and drone telemetry solutions."
  },
  {
    title: "High-Power RF Amplifiers",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
    icon: <RadioTower className="w-8 h-8" />, 
    description: "Integration and supply of high-power RF amplifiers."
  },
  {
    title: "Ground Loop Back Units",
    image: "https://images.unsplash.com/photo-1622467203530-d31e8649f86f?w=800",
    icon: <RefreshCcw className="w-8 h-8" />, 
    description: "Precision ground loop back units for signal testing."
  },
  {
    title: "MIL-Grade Connectors",
    image: "https://images.unsplash.com/photo-1607868382768-9bc4483b2ef9?w=800",
    icon: <Plug className="w-8 h-8" />, 
    description: "Micro-D, Nano-D, D-Sub, Circular & Micro-Circular connectors."
  },
  {
    title: "MIL-Grade RF Cable Assemblies",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800",
    icon: <Waves className="w-8 h-8" />, 
    description: "Reliable RF cable assemblies for military applications."
  },
  {
    title: "MIL-Grade DC-DC Converters",
    image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800",
    icon: <Battery className="w-8 h-8" />, 
    description: "High-efficiency DC-DC converters built to military specifications."
  },
  {
    title: "DC Programmable Power Supplies",
    image: "https://images.unsplash.com/photo-1603732559578-972371d1a92a?w=800",
    icon: <Bolt className="w-8 h-8" />, 
    description: "Advanced DC programmable power supplies for precision control."
  },
  {
    title: "RF & Microwave Components",
    image: "https://images.unsplash.com/photo-1633356123271-9262a7b6b7c3?w=800",
    icon: <Signal className="w-8 h-8" />, 
    description: "High-performance RF & Microwave components."
  },
  {
    title: "Customized Software for Defence",
    image: "https://images.unsplash.com/photo-1593104547260-82b99c39b8b9?w=800",
    icon: <Code className="w-8 h-8" />, 
    description: "Bespoke software solutions designed for defense applications."
  },
  {
    title: "Customized Rugged Computers & Networking Switches",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800",
    icon: <Server className="w-8 h-8" />, 
    description: "Rugged computers and high-performance networking switches for military applications."
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
          <br /><br />
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300">

          WE INTRODUCE OURSELVES AS "SRI DATTA ELECTRONICS PRIVATE LIMITED", A COMPANY INCORPORATED IN HYDERABAD BY US, A TEAM OF PROFESSIONALS FROM TECHNICAL AND ENGINEERING BACKGROUND, HAVING ABOUT FOURTEEN YEARS OF EXPERIENCE WITH DEFENCE & GOVERNMENT ORGANIZATIONS FOR A WIDE RANGE OF PRODUCTS AND SERVICES.
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
            Sri Datta Electronics is the technology expertise Organization having dedicated techno-commercial professionals with many man-hour experience in providing services and solutions in the area of Satellite programs, defense, avionics, and other harsh environment applications where reliability is critical.

Our engineering services capability has been established and proven with adequate expertise in the area of high-reliability components, RF & microwave components, and Telemetry subsystems.

We are equipped with a good laboratory for our equipment’s calibrations.
We have an internal Inventory Management System to maintain/update the Vendors.
We generate Reports to our Vendors online for the respective job done & maintenance.
Our team is dedicated to working under any circumstances, similar to 24x7 support.
Presently, we have spread our workmanship to South India states & have a high ambition to spread across India.

We are registered with all Defence Labs in India.

We are working on the Design and Development of Electronic Sub-systems for DRDO.

We have successfully developed software for the Ground Telemetry Checkout System under a Make in India program for DRDO, a Single Integrated Software for Dual Channel Receiver, Dual Bit Sync, and Dual Decom with Diversity Combiner, which is used for phase checks and flight trails and post-analysis of the flight trails.

We are providing Drone-based Telemetry Tracking systems for low-altitude missile programs, to track the missile and real-time video data streaming.

Now we are planning to enhance the tracking capabilities and wireless communication in the field of real-time telemetry tracking and video transmission for several Defence projects.
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
              Our brochure (sourced from our SDE_Product_Line.pdf) offers an in-depth view of our cutting-edge technologies,
              state-of-the-art products and innovative solutions. It encompasses detailed descriptions, technical specifications and
              the wide range of applications for our products.
            </p>
            <p>
              <strong>Integrated Telemetry System:</strong> This solution provides robust dual-channel reception with built-in synchronizers
              and diversity combining, ensuring consistent performance in critical environments.
            </p>
            <p>
              <strong>SDR Solutions:</strong> Our Software Defined Radio offerings empower secure, agile communication with support for video,
              audio and data, making them ideal for dynamic MANET environments.
            </p>
            <p>
              <strong>Rugged Computers:</strong> Designed for resilience, our computers and network solutions are engineered for harsh
              operational conditions and mission-critical applications.
            </p>
            <img 
              src="https://images.unsplash.com/photo-1513451713350-dee890297c4a?w=800" 
              alt="Brochure Cover" 
              className="w-full rounded-md border-2 border-white"
            />
            <img 
              src="https://images.unsplash.com/photo-1581020246766-78cf1b32d6de?w=800" 
              alt="Product Details" 
              className="w-full rounded-md border-2 border-white"
            />
            <p>
              For more detailed technical specifications and design philosophies, please refer to our brochure. This document reflects
              our commitment to quality and innovation, merging practical engineering with visionary technology.
            </p>
          </div>
        </div>
      </section>
      {/* Our Strengths Section */}
      <section id="strengths" className="py-20 bg-gradient-to-b from-blue-900 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Strengths</h2>
          <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed space-y-6">
            <p>
              High reliability RF & microwave components & sub-systems.
            </p>
            <p>
              Our in-depth knowledge of the products and applications, along with efficient and personalized service, enables us to build everlasting relationships with our customers and suppliers. We are continuously enhancing our product portfolio by keeping ourselves updated on new technological developments and market trends to help our customers find suitable solutions for their applications.
            </p>
            <p>
              Offices at important locations in India and abroad within the proximity reach of the customers.
            </p>
            <p>
              It is SDE strict policy on TQM (Total Quality Management) to meet or exceed customer requisites. It is SDE’s objective to operate and perform activities that fulfill total customer requirements in terms of technology to provide world-class service with cutting-edge solutions. The Company has a Quality Check program every day to monitor the jobs done & maintain quality objectives and infrastructures for effective operations. All these exercises will lead to continuous improvements & services. Also, if required, the Company will train personnel to maintain Quality objectives.
            </p>
            <h3 className="text-2xl font-bold mt-4">Measure of Quality:</h3>
            <p>
              Every week, the company will generate reports for quality considerations undertaken by the personnel, either from office automation, technical installations, or customer satisfaction on different levels, submitted by each employee. This will help the company measure the quality awareness within the organization for improvements.
            </p>
            <h3 className="text-2xl font-bold mt-4">Updating of Technology</h3>
            <p>
              Facilities provided to impart training to our employees/executives in the state-of-the-art technology.
            </p>
            <h3 className="text-2xl font-bold mt-4">TQM</h3>
            <p>
              The Company has externally hired TQM specialists who conduct Quality training programs often for the personnel. This training program will keep the personnel always in a positive direction when the work is undertaken.
            </p>
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section id="vision" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">Our Vision</h2>
          <div className="max-w-3xl mx-auto text-white text-lg leading-relaxed space-y-6">
            <p>
              To become a market leader in products, services, and solutions in supporting the Indian space, Defence, and avionics industry. Sri Datta Electronics is committed to realizing this vision with four dedicated endeavors:
            </p>
            <ul className="list-disc list-inside">
              <li>Customer-friendly</li>
              <li>Service excellence</li>
              <li>Financial stability</li>
              <li>Consistency</li>
            </ul>
            <p>
              We are committed to integrating environmental and social issues into our business.
            </p>
            <p>
              Our goal is to be the leader in providing the best support, quality, and services against customer requirements.
            </p>
            <p>
              <strong>Focused Market Segment</strong>
              <br />Defence
              <br />Space
              <br />Avionics
            </p>
            <p>
              <strong>Business and Technology Partners</strong>
              <br />1. Lumistar Inc, USA - <a href="https://lumi-star.com/contact/international-reps/" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">https://lumi-star.com/contact/international-reps/</a>
            </p>
            <p>
              Earlier, Sri Datta Electronics was represented by L3 Communications, USA for Telemetry systems. As L3 Communications has completely closed the Telemetry group, now Sri Datta Electronics is representing Lumistar Inc, USA from 2019.
            </p>
            <p>
              Yours sincerely,
              <br />For Sri Datta Electronics Pvt. Ltd.
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