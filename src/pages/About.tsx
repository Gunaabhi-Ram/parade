import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Heart } from 'lucide-react';
import AnimatedText from '../components/AnimatedText';
import FadeInWhenVisible from '../components/FadeInWhenVisible';
import ScaleInWhenVisible from '../components/ScaleInWhenVisible';

// ... (keep existing stats and team arrays)

export default function About() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="pt-32 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeInWhenVisible className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Beyond</span>
          </h2>
          <AnimatedText
            text="We're a team of passionate digital craftsmen, dedicated to transforming ideas into exceptional digital experiences."
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          />
        </FadeInWhenVisible>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="aspect-square rounded-full bg-gradient-to-r from-purple-200 to-pink-200 absolute -top-4 -left-4 w-72 h-72 blur-3xl opacity-30"
            />
            <motion.img
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team Collaboration"
              className="rounded-2xl shadow-2xl relative"
            />
          </motion.div>
          <FadeInWhenVisible delay={0.2}>
            <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
            <p className="text-gray-600 mb-6">
              At Beyond, we envision a world where every business can harness the full potential of digital technology. We're not just service providers; we're your partners in digital transformation.
            </p>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {['Innovation First', 'Client Success', 'Quality Driven', 'Continuous Growth'].map((value) => (
                <motion.div
                  key={value}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-center"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="h-2 w-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mr-3"
                  />
                  <span className="text-gray-800 font-medium">{value}</span>
                </motion.div>
              ))}
            </motion.div>
          </FadeInWhenVisible>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <ScaleInWhenVisible key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <stat.icon className="h-6 w-6 text-purple-600" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </motion.div>
            </ScaleInWhenVisible>
          ))}
        </motion.div>

        <FadeInWhenVisible className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">Meet Our Team</h3>
          <AnimatedText
            text="Our diverse team of experts brings together years of experience and a passion for innovation."
            className="text-gray-600 max-w-3xl mx-auto"
          />
        </FadeInWhenVisible>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 pb-20"
        >
          {team.map((member, index) => (
            <ScaleInWhenVisible key={member.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-32 h-32 mx-auto mb-6"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-10 blur-lg"
                  />
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-full h-full object-cover relative"
                  />
                </motion.div>
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-purple-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            </ScaleInWhenVisible>
          ))}
        </motion.div>
      </div>
    </section>
  );
}