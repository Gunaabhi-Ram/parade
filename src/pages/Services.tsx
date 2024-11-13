import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Megaphone } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import ScaleInWhenVisible from '../components/ScaleInWhenVisible';

const services = [
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom web applications built with cutting-edge technologies for optimal performance.',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Beautiful, intuitive interfaces that enhance user experience and drive engagement.',
  },
  {
    icon: Globe,
    title: 'Digital Strategy',
    description: 'Comprehensive digital strategies to help your business thrive in the digital age.',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that deliver measurable results.',
  },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <AnimatedText
            text="Comprehensive solutions for your digital needs"
            className="text-xl text-gray-600"
          />
        </FadeInWhenVisible>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <ScaleInWhenVisible key={service.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="p-6 bg-white rounded-xl shadow-xl hover:shadow-2xl transition-shadow"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6"
                >
                  <service.icon className="h-6 w-6 text-purple-600" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl font-semibold mb-3"
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="text-gray-600"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            </ScaleInWhenVisible>
          ))}
        </motion.div>
      </div>
    </section>
  );
}