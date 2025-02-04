import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Brain, Server, Code, ChevronDown, Briefcase, Sparkles, Home, User, Wrench, Phone, MonitorSmartphone, GraduationCap, ExternalLink } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const navItems = [
    { name: 'Home', icon: <Home className="w-4 h-4" />, section: 'home' },
    { name: 'About', icon: <User className="w-4 h-4" />, section: 'about' },
    { name: 'Skills', icon: <Code className="w-4 h-4" />, section: 'Professional Skills' },
    { name: 'Projects', icon: <Briefcase className="w-4 h-4" />, section: 'projects' },
    { name: 'Education', icon: <GraduationCap className="w-4 h-4" />, section: 'education' },
    { name: 'Contact', icon: <Phone className="w-4 h-4" />, section: 'contact' },
  ];

  const professionalSkills = [
    { name: 'HTML5', level: 90, icon: <Code className="w-6 h-6" /> },
    { name: 'CSS3', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'JavaScript', level: 85, icon: <Code className="w-6 h-6" /> },
    { name: 'React', level: 80, icon: <Code className="w-6 h-6" /> },
    { name: 'MySQL', level: 70, icon: <Server className="w-6 h-6" /> },
    { name: 'Node.js', level: 70, icon: <Server className="w-6 h-6" /> },
  ];

  const tools = [
    { name: 'VS Code', icon: <MonitorSmartphone className="w-6 h-6" />, description: 'Primary code editor' },
    { name: 'Git', icon: <Wrench className="w-6 h-6" />, description: 'Version control' },
    { name: 'Vercel', icon: <Wrench className="w-6 h-6" />, description: 'Deployment platform' },
    { name: 'GitHub', icon: <Github className="w-6 h-6" />, description: 'Code repository' },
  ];

  const learningSkills = [
    { name: 'Frontend Development', icon: <Code className="w-6 h-6" />, level: 90 },
    { name: 'Backend Development', icon: <Server className="w-6 h-6" />, level: 60 },
    { name: 'AI/ML', icon: <Brain className="w-6 h-6" />, level: 40 }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Techno India University",
      year: "2022 - 2025",
      grade: "7.8 CGPA"
    },
    {
      degree: "Higher Secondary Education",
      institution: "Gopalmath High School",
      year: "2022",
      grade: "80%"
    }
  ];

  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Framer Motion. Features smooth animations and a clean design.",
      image: "https://us.123rf.com/450wm/d8nn/d8nn2201/d8nn220100386/180326694-modern-black-workspace-with-a-copy-space-for-product-display-digital-devices-and-supplies-top-view.jpg?ver=6",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
      liveLink: "https://agni-portfolio77.netlify.app/",
      githubLink: "https://github.com/AgniswarBanerjee04/Portfolio-website"
    },
    {
      title: "Eduplay",
      description: "Developed a dynamic e-learning platform with interactive courses, quizzes, and study materials. Implemented frontend with HTML, CSS, JavaScript, and backend with Node.js and MongoDB. Features include user authentication, progress tracking, and responsive design.",
      image: "https://c0.wallpaperflare.com/preview/722/962/382/learn-student-laptop-internet.jpg",
      technologies: ["Next.js", "MongoDB", "Redux", "Material UI"],
      liveLink: "https://singular-cheesecake-90cee8.netlify.app",
      githubLink: "https://github.com/AgniswarBanerjee04/EduPlay"
    },
    {
      title: "Expense-Tracker",
      description: "Developed a user-friendly expense tracker to manage and monitor daily finances. Built with HTML, CSS, JavaScript for the frontend and Node.js, MongoDB for the backend. Features include user authentication, expense categorization, real-time data visualization, and a responsive design for seamless access across devices.",
      image: "https://c0.wallpaperflare.com/preview/816/72/895/business-iphone-laptop-office.jpg",
      technologies: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
      liveLink: "https://weather-app-demo.vercel.app",
      githubLink: "https://github.com/AgniswarBanerjee04/weather-app"
    },
    {
      title: "color-Picker",
      description: "Developed a simple and interactive color picker tool using HTML, CSS, and JavaScript. Features include real-time color selection, HEX/RGB code display, and a user-friendly interface for seamless color exploration. Designed for responsiveness across all devices.",
      image: "https://media.istockphoto.com/id/1354911608/photo/simple-color-picker-tool-with-pipette-and-rainbow-ring-3d-render-illustartion.jpg?s=612x612&w=0&k=20&c=D8e0O5iea4czaSA-ynYu5MOu7HmdNmkvHQW9Z1mxNoY=",
      technologies: ["React", "Firebase", "Material UI", "Redux"],
      liveLink: "https://task-manager-demo.vercel.app",
      githubLink: "https://github.com/AgniswarBanerjee04/task-manager"
    }
  ];

  const figure = {
    body: "M 50 30 L 50 70",
    head: "M 50 30 A 10 10 0 1 1 50.1 30",
    arms: "M 30 50 L 50 50 L 70 50",
    legs: "M 35 90 L 50 70 L 65 90"
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-20 h-20"
        >
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full border-t-transparent animate-spin" />
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Code className="w-8 h-8 text-blue-500" />
          </motion.div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Header Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800"
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text"
            >
              AB
            </motion.div>
            <div className="hidden md:flex space-x-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.section}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.section)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full transition-colors ${
                    activeSection === item.section
                      ? 'bg-blue-600 text-white'
                      : 'hover:bg-gray-800'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center relative px-4 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="relative w-48 h-48 mx-auto mb-8">
            <motion.svg
              viewBox="0 0 100 100"
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <motion.path
                d={figure.body}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.path
                d={figure.head}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1 }}
              />
              <motion.path
                d={figure.arms}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1 }}
              />
              <motion.path
                d={figure.legs}
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
              />
            </motion.svg>
            <motion.div
              className="absolute inset-0 bg-blue-500 rounded-full opacity-20"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="text-5xl font-bold mb-2">Agniswar Banerjee</h1>
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Frontend Developer
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <Briefcase className="w-5 h-5 text-blue-400" />
            <p className="text-xl text-gray-300">
              Software Engineer Intern
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-xl text-gray-300 mb-8"
          >
            Exploring Backend & AI/ML
          </motion.p>

          <div className="flex gap-4 justify-center mb-12">
            {[
              { icon: <Github className="w-6 h-6" />, href: "https://github.com/AgniswarBanerjee04" },
              { icon: <Linkedin className="w-6 h-6" />, href: "https://www.linkedin.com/in/agni4/" },
              { icon: <Mail className="w-6 h-6" />, href: "mailto:agniwork99@gmail.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-blue-600 rounded-full hover:bg-blue-700 relative"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {social.icon}
                <motion.div
                  className="absolute inset-0 bg-blue-400 rounded-full"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-blue-500 mb-2" />
          </motion.div>
          <ChevronDown className="w-8 h-8 text-blue-500" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gray-900">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-lg text-gray-300 leading-relaxed mb-6"
            >
              Hello! I'm Agniswar Banerjee 👋, a passionate and dedicated final-year BCA student with a strong foundation in front-end development and a growing interest in back-end development, artificial intelligence (AI), and machine learning (ML). Currently, I am honing my skills as a Software Engineer Intern 💼, where I have the opportunity to work on exciting projects and collaborate with talented professionals.

With a keen eye for detail and a creative mindset 🎨, I specialize in creating intuitive and visually appealing user interfaces. My journey as a front-end developer has equipped me with a deep understanding of web technologies, including HTML, CSS, JavaScript, and popular frameworks like React and Angular.

In addition to my front-end expertise, I am actively expanding my knowledge of back-end development. I am learning about server-side technologies, databases, and RESTful APIs to become a well-rounded developer capable of building robust and scalable applications.

My curiosity and passion for innovation have led me to explore the fascinating fields of AI and ML. I am eager to leverage these cutting-edge technologies to solve real-world problems and create intelligent systems that can enhance user experiences.

When I'm not coding, you can find me exploring the latest trends in technology, participating in hackathons 🏅, or experimenting with new development tools. I am always eager to learn and grow 📚, and I am excited about the endless possibilities that the tech world has to offer.

Let's connect and create something amazing together! 🚀
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Professional Skills Section */}
      <section id="Professional Skills" className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Professional Skills</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
                    >
                      <motion.div
                        className="absolute inset-0 bg-white"
                        animate={{ x: ["0%", "100%"] }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          repeatType: "reverse",
                          ease: "linear",
                        }}
                        style={{ opacity: 0.1 }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tools Section */}
            <div>
              <h3 className="text-2xl font-bold mb-8">Tools I Use</h3>
              <div className="grid grid-cols-2 gap-6">
                {tools.map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 }}
                    className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 transition-colors duration-300"
                  >
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="inline-block mb-4"
                    >
                      {tool.icon}
                    </motion.div>
                    <h4 className="text-lg font-semibold">{tool.name}</h4>
                    <p className="text-gray-400 text-sm mt-2">{tool.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Learning Journey Section */}
      <section className="py-20 px-4 bg-gray-900">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Learning Journey</h2>
          <div className="space-y-8">
            {learningSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {skill.icon}
                  </motion.div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                <div className="h-4 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-500 relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-white"
                      animate={{ x: ["0%", "100%"] }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }}
                      style={{ opacity: 0.1 }}
                    />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 space-y-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                      <p className="text-gray-200 text-sm">{project.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 rounded-full text-sm text-blue-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 bg-gray-900">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.institution}</p>
                    <p className="text-gray-400">{edu.year}</p>
                    <p className="text-green-400 mt-2">Grade: {edu.grade}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:agniwork99@gmail.com"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                  <span>agniwork99@gmail.com</span>
                </a>
                <a
                  href="https://github.com/AgniswarBanerjee04"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/agni4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                  <span>LinkedIn</span>
                </a>
               
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-gray-800 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the platforms listed here.
              </p>
              <div className="flex gap-4">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="mailto:agniwork99@gmail.com"
                  className="px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Me</span>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  href="https://www.linkedin.com/in/agni4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default App;