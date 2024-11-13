import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, Palette, Globe } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80',
    description: 'Modern e-commerce platform with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Finance Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    description: 'Intuitive dashboard for tracking financial metrics and analytics.',
    technologies: ['Figma', 'React', 'D3.js'],
    link: '#'
  },
  {
    id: 3,
    title: 'Travel App',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80',
    description: 'Travel planning app with AI-powered recommendations.',
    technologies: ['React Native', 'Firebase', 'AI/ML'],
    link: '#'
  },
  {
    id: 4,
    title: 'Healthcare Platform',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    description: 'Telemedicine platform connecting patients with healthcare providers.',
    technologies: ['Vue.js', 'Python', 'WebRTC'],
    link: '#'
  },
  {
    id: 5,
    title: 'Social Network',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&q=80',
    description: 'Next-gen social platform focused on creative professionals.',
    technologies: ['React Native', 'GraphQL', 'AWS'],
    link: '#'
  },
  {
    id: 6,
    title: 'Smart Home Dashboard',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?auto=format&fit=crop&q=80',
    description: 'IoT dashboard for smart home device management.',
    technologies: ['Figma', 'React', 'IoT'],
    link: '#'
  }
];

const categories = ['All', 'Web Development', 'UI/UX Design', 'Mobile App'];

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Web Development':
      return Code;
    case 'UI/UX Design':
      return Palette;
    case 'Mobile App':
      return Globe;
    default:
      return Code;
  }
};

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter(project => 
    activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our latest projects and creative solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              } transition-all shadow-md`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-transparent flex items-end p-6"
                  >
                    <div className="text-white">
                      <p className="font-medium mb-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="text-sm bg-white/20 px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      className="text-purple-600"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </motion.a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    {React.createElement(getCategoryIcon(project.category), {
                      className: 'h-4 w-4 mr-2'
                    })}
                    <span className="text-sm">{project.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}