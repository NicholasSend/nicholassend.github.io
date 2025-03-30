"use client";
import React, { useState, useEffect } from "react";
import {Menu, X, ChevronDown, Mail, Phone, MapPin, Coffee, Zap, BookOpen, Code, Map, ExternalLink} from "lucide-react";
// import RandomBackground from '../components/RandomBackground';
import SkillsVisualization from '../components/SkillsVisualization';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const NicholasSendykWebsite = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollY, setScrollY] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);


  useEffect(() => {
    // setMounted(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = ['about', 'skills', 'experience', 'education', 'projects', 'library', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).classList.add('animate-fade-in');
        }
      });
    };
    
    const observer = new IntersectionObserver(handleIntersection, { root: null, threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);
  
  // Smooth scroll to section
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Add a fun Easter egg - Konami code detector
  useEffect(() => {
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;
    
    const handleKeyDown = (e: { key: string; }) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          // Easter egg activation!
          setIsDarkMode(!isDarkMode);
          konamiIndex = 0;
          alert("You found the secret code! Theme toggled 🚀");
        }
      } else {
        konamiIndex = 0;
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isDarkMode]);
  
  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800'}`}>
    {/* <RandomBackground /> */}
      
      {/* Floating Ottawa love badge
      <div className="fixed bottom-4 right-4 z-10 bg-red-500 text-white round`ed-full p-3 shadow-lg transform hover:scale-110 transition-transform duration-300">
        <div className="flex items-center">
          <MapPin size={18} className="mr-1" />
          <span className="text-sm font-medium">Ottawa ❤️</span>
        </div>
      </div> */}

      {/* Theme toggle button */}
      <button 
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed bottom-4 left-4 z-10 bg-blue-600 text-white rounded-full p-3 shadow-lg transform hover:rotate-12 transition-all duration-300"
        aria-label="Toggle theme"
      >
        {isDarkMode ? '☀️' : '🌙'}
      </button>
      {/* Navigation */}
      <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md fixed w-full z-10 transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className={`font-bold text-xl ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>
                Nicholas Sendyk
                <span className="font-bold ml-1 inline-block animate-pulse">_</span>
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-4">
              {['about', 'skills', 'experience', 'education', 'library', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-3 py-2 text-sm font-medium transition-all duration-300 border-b-2 ${
                    activeSection === section 
                      ? isDarkMode 
                        ? 'text-blue-400 border-blue-400' 
                        : 'text-blue-600 border-blue-600' 
                      : isDarkMode 
                        ? 'text-gray-300 border-transparent hover:text-blue-400' 
                        : 'text-gray-700 border-transparent hover:text-blue-600'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
            
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`inline-flex items-center justify-center p-2 rounded-md ${
                  isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700' : 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                } focus:outline-none transition-colors duration-300`}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className={`md:hidden transition-all duration-300 ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {['about', 'skills', 'experience', 'education', 'library', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                    activeSection === section 
                      ? isDarkMode 
                        ? 'text-white bg-gray-700' 
                        : 'text-blue-600 bg-gray-100' 
                      : isDarkMode 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-700' 
                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'
                  } transition-colors duration-300`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className={`pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-r from-blue-900 to-purple-900' 
          : 'bg-gradient-to-r from-blue-500 to-blue-700'
      } text-white transition-colors duration-500`}
      style={{
        backgroundImage: isDarkMode 
          ? 'radial-gradient(circle at 20% 50%, rgba(76, 29, 149, 0.3) 0%, transparent 40%), radial-gradient(circle at 80% 30%, rgba(37, 99, 235, 0.4) 0%, transparent 50%)' 
          : ''
      }}>
        {/* <RandomBackground /> */}
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-300" 
               style={{animationDelay: '0.3s'}}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Nicholas Sendyk</h1>
            <div className="text-xl md:text-2xl mb-8">Data Engineer & AI/ML Enthusiast</div>
            
            <div className="flex justify-center items-center mb-8">
              <div className="flex items-center space-x-4 px-6 py-2 bg-white bg-opacity-20 rounded-full backdrop-blur-sm text-gray-800">
                <div className="flex items-center">
                  <Coffee size={18} className="mr-1" />
                  <span>Code</span>
                </div>
                <div className="h-4 w-0.5 bg-white bg-opacity-40"></div>
                <div className="flex items-center">
                  <Zap size={18} className="mr-1" />
                  <span>Innovate</span>
                </div>
                <div className="h-4 w-0.5 bg-white bg-opacity-40"></div>
                <div className="flex items-center">
                  <Map size={18} className="mr-1" />
                  <span>Explore</span>
                </div>
              </div>
            </div>
            
            <div className="text-lg md:text-xl max-w-3xl mx-auto">
              Passionate about building intelligent systems that make sense of complex data. 
              Turning caffeine into code and curiosity into solutions.
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center space-x-0 space-y-4 sm:space-x-4 sm:space-y-0">
              <button 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Get In Touch
              </button>
              <a 
                href="https://GitHub.com/nicholassend/" 
                className="w-full sm:w-auto px-6 py-3 bg-transparent border border-white text-white font-medium rounded-md hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg inline-flex items-center justify-center"
              >
                View Projects
              </a>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent opacity-10"></div>
        </div>
        
        {/* Ottawa skyline silhouette */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 text-white opacity-20">
            <path d="M0,0 L0,120 L1200,120 L1200,0 L1150,0 L1140,20 L1130,0 L1120,30 L1100,10 L1090,40 L1070,30 L1050,70 L1030,50 L1010,80 L990,65 L970,90 L950,80 L930,100 L910,70 L890,110 L870,90 L850,100 L830,60 L810,90 L790,40 L770,60 L750,30 L730,50 L710,20 L690,40 L670,10 L650,30 L630,5 L610,25 L590,10 L570,40 L550,20 L530,50 L510,30 L490,60 L470,40 L450,70 L430,50 L410,90 L390,60 L370,80 L350,40 L330,60 L310,30 L290,50 L270,20 L250,40 L230,15 L210,35 L190,10 L170,30 L150,5 L130,25 L110,10 L90,30 L70,15 L50,40 L30,20 L10,35 L0,0 Z" fill="currentColor" />
          </svg>
        </div>
      </div>
      
      {/* Add global styles */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(10px); }
          50% { transform: translateY(0) translateX(20px); }
          75% { transform: translateY(10px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 1s ease forwards;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes rotate360 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .group:hover .group-hover\\:rotate-360 {
          animation: rotate360 1s ease;
        }
      `}</style>

      {/* About Section */}
      <section id="about" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0 animate-on-scroll opacity-0">
              <div className="w-72 h-72 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden border-4 border-blue-600 transform transition-all duration-500 hover:rotate-3 hover:scale-105 hover:shadow-xl">
                {/* Replace placeholder with your actual image */}
                <img src="/nicholas_sendyk.JPG" alt="Nicholas Sendyk" className="w-full h-full object-cover" />
                {/* Note: Your actual image would be used in production */}
              </div>
              
              {/* Social connections */}
              <div className="mt-6 flex justify-center space-x-4">
                <a href="https://linkedin.com/in/nicholas-sendyk/" className={`p-2.5 rounded-full ${isDarkMode ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}>
                  <FaLinkedinIn  size={16} />
                </a>
                <a href="https://GitHub.com/nicholassend/" className={`p-2.5 rounded-full ${isDarkMode ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}>
                  <FaGithub size={16} />
                </a>
                <a href="mailto:nicholas.sendyk@disroot.org" className={`p-2.5 rounded-full ${isDarkMode ? 'bg-gray-700 text-blue-400 hover:bg-gray-600' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'} transition-all duration-300 transform hover:scale-110`}>
                  <Mail size={16} />
                </a>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <div className="animate-on-scroll opacity-0">
                <div className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                  I'm a Data Engineer with expertise in AI/ML technologies, particularly focused on leveraging 
                  LLMs for data processing and analysis. With a perfect 4.0 GPA in Software Engineering from Carleton University,
                  I combine strong academic foundations with practical industry experience.
                </div>
                
                <div className={`my-6 p-5 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-blue-50'} transition-colors duration-500`}>
                  <h3 className={`text-xl font-semibold mb-3 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>
                    <MapPin className="inline-block mr-2" size={20} /> Ottawa: My Home & Inspiration
                  </h3>
                  <div className={`${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                    Born and raised in Ottawa, I've developed a deep appreciation for our city's unique blend of natural beauty, 
                    tech innovation, and cultural diversity. From skating on the Rideau Canal to exploring Gatineau Park, 
                    Ottawa's landscape continually inspires my creativity and problem-solving approach.
                  </div>
                </div>
                
                <div className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                  When I'm not designing data pipelines or coding, you'll find me exploring Ottawa's extensive trail system on my mountain bike, 
                  planning my next international adventure (I've visited 15 countries and counting!), or experimenting with home automation projects 
                  that often involve more blinking LEDs than my apartment really needs.
                </div>
                
                <div className={`text-lg mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                  My experience spans from data pipeline development to full-stack application engineering, with a particular
                  passion for creating innovative solutions using cutting-edge technologies. I've worked across multiple industries,
                  contributing to significant projects in telecommunications, compliance automation, and data visualization.
                </div>
                
                <div className="flex flex-wrap -mx-2 mt-6">
                  <div className={`px-2 w-1/2 md:w-1/4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full flex flex-col items-center text-center transition-colors duration-500 transform hover:-translate-y-1 hover:shadow-md`}>
                      <Coffee size={24} className={`mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="font-medium">Coffee Enthusiast</span>
                    </div>
                  </div>
                  <div className={`px-2 w-1/2 md:w-1/4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full flex flex-col items-center text-center transition-colors duration-500 transform hover:-translate-y-1 hover:shadow-md`}>
                      <Map size={24} className={`mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="font-medium">Travel Addict</span>
                    </div>
                  </div>
                  <div className={`px-2 w-1/2 md:w-1/4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full flex flex-col items-center text-center transition-colors duration-500 transform hover:-translate-y-1 hover:shadow-md`}>
                      <Code size={24} className={`mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="font-medium">Tech Innovator</span>
                    </div>
                  </div>
                  <div className={`px-2 w-1/2 md:w-1/4 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'} transition-colors duration-500`}>
                    <div className={`p-3 rounded-lg ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'} h-full flex flex-col items-center text-center transition-colors duration-500 transform hover:-translate-y-1 hover:shadow-md`}>
                      <BookOpen size={24} className={`mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
                      <span className="font-medium">Lifelong Learner</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-16 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>Skills & Technologies</h2>
          
          {/* Custom skill level indicators */}
          <div className="mb-12 animate-on-scroll opacity-0">
            <div className={`text-center mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
              I'm constantly learning and adding to my technical toolbox. Here's where I currently stand:
            </div>
            
            <SkillsVisualization isDarkMode={isDarkMode} />
          </div>
          
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-on-scroll opacity-0">
            {[
              {
                title: "Languages",
                items: ["Python", "Java", "JavaScript", "C/C#", "SQL", "NodeJS"]
              },
              {
                title: "Frameworks",
                items: ["LangChain", "Spring Boot", "AngularJS", "PlotlyDash", "ROS", "OpenCV"]
              },
              {
                title: "AI & Data",
                items: ["OpenAI GPTs", "LLaMa", "Pandas", "NumPy", "PyTorch", "FAISS"]
              },
              {
                title: "DevOps & Cloud",
                items: ["AWS (ECS, EKS, S3)", "Docker", "Azure Cloud Services", "PostgreSQL", "SQLite", "MSSQL"]
              }
            ].map((category, idx) => (
              <div 
                key={idx} 
                className={`${
                  isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-white hover:bg-blue-50'
                } p-6 rounded-lg shadow-md transition-all duration-500 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                <h3 className={`text-xl font-semibold mb-4 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                } transition-colors duration-500`}>{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className={`flex items-center ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-500 group`}>
                      <ChevronDown className={`${
                        isDarkMode ? 'text-blue-400' : 'text-blue-500'
                      } mr-2 transform group-hover:rotate-360 transition-transform duration-500`} size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div> */}
          
          
          {/* <div className={`mt-16 p-6 rounded-lg ${
            isDarkMode ? 'bg-gray-800' : 'bg-blue-50'
          } shadow-md animate-on-scroll opacity-0 transition-colors duration-500`}>
            <h3 className={`text-xl font-semibold mb-4 text-center ${
              isDarkMode ? 'text-blue-400' : 'text-blue-600'
            } transition-colors duration-500`}>Beyond Tech: My Passion for Exploration</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-sm transition-colors duration-500`}>
                <h4 className={`font-medium mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-500'
                } transition-colors duration-500`}>Outdoor Adventures</h4>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-sm transition-colors duration-500`}>
                  From mountain biking in Gatineau Park to hiking in Algonquin, I'm always seeking new outdoor challenges 
                  that keep me connected to nature and help me maintain perspective on what really matters.
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-sm transition-colors duration-500`}>
                <h4 className={`font-medium mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-500'
                } transition-colors duration-500`}>Global Explorer</h4>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-sm transition-colors duration-500`}>
                  My travels across 15 countries have shaped my perspective on problem-solving. Each new culture offers unique 
                  approaches that I bring back to my technical work. Next destinations: Japan and New Zealand!
                </div>
              </div>
              
              <div className={`p-4 rounded-lg ${
                isDarkMode ? 'bg-gray-700' : 'bg-white'
              } shadow-sm transition-colors duration-500`}>
                <h4 className={`font-medium mb-2 ${
                  isDarkMode ? 'text-blue-300' : 'text-blue-500'
                } transition-colors duration-500`}>Ottawa Enthusiast</h4>
                <div className={`${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                } text-sm transition-colors duration-500`}>
                  From skating on the world's largest rink (the Rideau Canal) to exploring our amazing food scene, 
                  I'm constantly discovering new reasons to love this city I call home.
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center mb-12 animate-on-scroll opacity-0 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>Work Experience</h2>
          
          <div className="space-y-12">
            {[
              {
                company: "Lytica",
                role: "Data Engineer",
                period: "January 2022 – May 2022, May 2023 – Present",
                highlights: [
                  "Designed and implemented data pipelines to support data integration, processing, and analysis",
                  "Leveraged LangChain, OpenAI's API, and LLaMa to enable document summarization, extraction, and analysis",
                  "Developed dashboards with advanced filtering, for complex component data visualization",
                  "Automated real-time risk data acquisition for sustainability and geopolitical insights leveraging LLMs",
                  "Developed an autonomous knowledge graph for detecting mergers and acquisitions with 85% accuracy",
                  "Published preliminary research to the ACM Digital Library and presented at CASCON'22"
                ]
              },
              {
                company: "Ericsson",
                role: "Software and Systems Development Project Lead",
                period: "September 2022 – April 2023",
                highlights: [
                  "Led development of a VR-controlled telepresence system leveraging 5G ARISE Wireless lab technologies",
                  "Designed real-time control systems for robotics platforms using ROS, C#, Python, and OpenCV",
                  "Delivered a functional proof-of-concept system and collaborated with Ingenium for remote touring applications"
                ]
              },
              {
                company: "Ciena",
                role: "Contract Data Scientist",
                period: "May 2021 – September 2021, May 2022 – September 2022",
                highlights: [
                  "Developed lightweight version control mechanisms for large-scale telemetry data",
                  "Created interactive visualizations for network path traversal and optimized difference analysis algorithms",
                  "Reduced data storage requirements by 88% with advanced data sanitization scripts",
                  "Designed and optimized PostgreSQL databases to improve query speed and data management"
                ]
              },
              {
                company: "Teldio",
                role: "Junior Software Engineer",
                period: "May 2020 – September 2020",
                highlights: [
                  "Contributed within a scrum team as a full stack developer for Teldio's D3M Networks offering",
                  "Responsible for planning and developing code that was deployed to production on critical customer features",
                  "Leveraged technologies such as Ruby on Rails, JavaScript, VueJS, GoJS, CoffeeScript, and Backbone/Marionette"
                ]
              },
              {
                company: "Assent Compliance",
                role: "Student Software & Data Engineer",
                period: "May 2017 – August 2017, May 2018 – August 2018, May 2019 – August 2019",
                highlights: [
                  "Calibrated machine learning classification algorithms and curated datasets for compliance document validation",
                  "Built and deployed natural language processing models, automating the review of compliance documents",
                  "Developed front-end and back-end components using AngularJS, .NET Core, and AWS microservices",
                  "Wrote Stored Procedures in T-SQL for MSSQL database to be leveraged by back-end microservices"
                ]
              }
            ].map((job, index) => (
              <div key={index} className="flex flex-col md:flex-row animate-on-scroll opacity-0">
                <div className="md:w-1/4 mb-4 md:mb-0">
                  <h3 className={`text-xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'} transition-colors duration-500`}>{job.company}</h3>
                  <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>{job.role}</div>
                  <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} transition-colors duration-500`}>{job.period}</div>
                </div>
                <div className="md:w-3/4 md:pl-8">
                  <ul className={`space-y-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} transition-colors duration-500`}>
                    {job.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start">
                        <span className={`inline-block w-2 h-2 mt-2 mr-3 rounded-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-600'} flex-shrink-0 transition-colors duration-500`}></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Certifications Section */}
      <section
        id="education"
        className={`py-20 ${
          isDarkMode
            ? 'bg-gradient-to-r from-purple-900 to-gray-900'
            : 'bg-gradient-to-r from-gray-50 to-white'
        } transition-colors duration-500`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 
            className={`text-4xl font-extrabold text-center mb-16 animate-on-scroll ${
              isDarkMode ? 'text-purple-400' : 'text-blue-600'
            } transition-colors duration-500`}
          >
            Education &amp; Certifications
          </h2>

          <div className="space-y-12">
            {/* Education Card */}
            <div
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? 'text-purple-400' : 'text-blue-600'
                } mb-6 transition-colors duration-500`}
              >
                Education
              </h3>
              {/* Nested Education Details Box */}
              <div
                className={`p-4 rounded-lg border transition-colors duration-500 ${
                  isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'
                }`}
              >
                <h4
                  className={`text-xl font-semibold ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  } transition-colors duration-500`}
                >
                  B.Eng., Software Engineering
                </h4>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  } transition-colors duration-500`}
                >
                  Carleton University
                </p>
                <p
                  className={`${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  } transition-colors duration-500`}
                >
                  September 2019 - April 2023
                </p>
                <div className="mt-4 space-y-2">
                  <p
                    className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-500`}
                  >
                    <span className="font-medium">GPA:</span> 4.0 (Dean's Honour List 2020-2023)
                  </p>
                  <p
                    className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-500`}
                  >
                    <span className="font-medium">Awards:</span> Top Undergraduate Data Science Project, Senate Medal for Academic Achievement, Faculty Scholarship
                  </p>
                  <p
                    className={`${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    } transition-colors duration-500`}
                  >
                    <span className="font-medium">Activities:</span> Teaching Assistant, Research Assistant, Golden Key Honours Society
                  </p>
                </div>
              </div>
            </div>

            {/* Certifications Card */}
            <div
              className={`${
                isDarkMode ? 'bg-gray-800' : 'bg-white'
              } p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300`}
            >
              <h3
                className={`text-2xl font-bold ${
                  isDarkMode ? 'text-purple-400' : 'text-blue-600'
                } mb-6 transition-colors duration-500`}
              >
                Certifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Certification Card 1 */}
                <div
                  className={`p-4 rounded-lg border transition-colors duration-500 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-500">
                    Software Product Management Professional Specialization
                  </h4>
                  <p className="text-sm transition-colors duration-500">
                    University of Alberta
                  </p>
                  <p className="text-sm transition-colors duration-500">
                    August 2024
                  </p>
                  <p className="mt-2 text-sm transition-colors duration-500">
                    Mastered the principles of Agile development for building effective software and delighting clients.
                  </p>
                </div>

                {/* Certification Card 2 */}
                <div
                  className={`p-4 rounded-lg border transition-colors duration-500 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-500">
                    Game Theory
                  </h4>
                  <p className="text-sm transition-colors duration-500">
                    Stanford Online
                  </p>
                  <p className="text-sm transition-colors duration-500">
                    February 2021
                  </p>
                  <p className="mt-2 text-sm transition-colors duration-500">
                    Gained critical skills for strategic thinking and decision-making in competitive situations.
                  </p>
                </div>

                {/* Certification Card 3 */}
                <div
                  className={`p-4 rounded-lg border transition-colors duration-500 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-500">
                    Web Design Essentials
                  </h4>
                  <p className="text-sm transition-colors duration-500">
                    BitDegree
                  </p>
                  <p className="text-sm transition-colors duration-500">
                    August 2020
                  </p>
                  <p className="mt-2 text-sm transition-colors duration-500">
                    Acquired foundational skills in web design, including HTML, CSS, and design principles.
                  </p>
                </div>

                {/* Certification Card 4 */}
                <div
                  className={`p-4 rounded-lg border transition-colors duration-500 ${
                    isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200'
                  }`}
                >
                  <h4 className="text-lg font-semibold mb-2 transition-colors duration-500">
                    PredictionX
                  </h4>
                  <p className="text-sm transition-colors duration-500">
                    HarvardX
                  </p>
                  <p className="text-sm transition-colors duration-500">
                    May 2020
                  </p>
                  <p className="mt-2 text-sm transition-colors duration-500">
                    Gained historical knowledge of prediction methods used in various fields, including sports, healthcare, and finance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Covers Section */}
      <section id="books" className={`py-16 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} transition-colors duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className={`text-4xl font-bold text-center mb-12 animate-on-scroll ${isDarkMode ? 'text-white' : 'text-blue-600'} transition-colors duration-500`}>My Favorite Reads</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Book Cover 1 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book1.jpg"
                alt="Book Cover 1"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 2 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book2.jpg"
                alt="Book Cover 2"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:-rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 3 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book3.jpg"
                alt="Book Cover 3"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 4 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book4.jpg"
                alt="Book Cover 4"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:-rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 5 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book5.jpg"
                alt="Book Cover 5"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 6 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book6.jpg"
                alt="Book Cover 6"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:-rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 7 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book7.jpg"
                alt="Book Cover 5"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:rotate-2 animate-float"
              />
            </div>
            {/* Book Cover 8 */}
            <div className="relative group aspect-[2/3] overflow-hidden rounded-lg shadow-xl">
              <img
                src="/book8.jpg"
                alt="Book Cover 6"
                className="w-full h-full object-contain transform transition duration-500 hover:-translate-y-2 hover:-rotate-2 animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      
      {/* Contact Section */}
      <section
        id="contact"
        className={`py-20 ${
          isDarkMode
            ? '0d1320'
            : 'bg-gradient-to-r from-blue-500 to-blue-600'
        } text-white transition-all duration-500`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-center mb-16 animate-on-scroll opacity-0">
            Get In Touch
          </h2>
          
          <div className="animate-on-scroll opacity-0 transition-all duration-500">
            <p className="text-xl text-center mb-12">
              I'm always open to new opportunities, collaborations, and exciting projects.
              Feel free to connect with me on social media.
            </p>
            
            <div className="flex justify-center space-x-10">
              <div className="flex items-center group">
                <div
                  className={`mr-4 p-3 rounded-full bg-black bg-opacity-10 group-hover:bg-opacity-30 transition-all duration-300 transform group-hover:scale-110 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <FaLinkedinIn size={24} />
                </div>
                <a
                  href="https://linkedin.com/in/nicholas-sendyk/"
                  className="text-lg hover:underline group-hover:text-blue-200 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </div>
              <div className="flex items-center group">
                <div
                  className={`mr-4 p-3 rounded-full bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 transform group-hover:scale-110 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <FaGithub size={24} />
                </div>
                <a
                  href="https://github.com/NicholasSend"
                  className="text-lg hover:underline group-hover:text-blue-200 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
              <div className="flex items-center group">
                <div
                  className={`mr-4 p-3 rounded-full bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300 transform group-hover:scale-110 ${
                    isDarkMode ? 'text-blue-400' : 'text-blue-600'
                  }`}
                >
                  <Mail size={24} />
                </div>
                <a
                  href="mailto:nicholas.sendyk@disroot.org"
                  className="text-lg hover:underline group-hover:text-blue-200 transition-colors duration-300"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 ${isDarkMode ? '0d1320' : 'bg-gray-800'} text-white transition-colors duration-500`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-4">Nicholas Sendyk | Data Engineer & AI/ML Enthusiast</div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="mailto:nicholas.sendyk@disroot.org" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-400'} transition-colors duration-300`}>
              <Mail size={20} />
            </a>
            <a href="https://linkedin.com/in/nicholas-sendyk/" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-400'} transition-colors duration-300 font-bold`}>
              <FaLinkedinIn size={20} />
            </a>
            <a href="https://github.com/NicholasSend" className={`${isDarkMode ? 'hover:text-blue-400' : 'hover:text-blue-400'} transition-colors duration-300 font-bold`}>
              <FaGithub size={20} />
            </a>
          </div>
          <div className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'} transition-colors duration-500`}>
            © {new Date().getFullYear()} Nicholas Sendyk. All rights reserved.
          </div>
          <div className={`text-xs mt-2 ${isDarkMode ? 'text-gray-600' : 'text-gray-500'} transition-colors duration-500`}>
            Made with ❤️ in Ottawa, Canada
          </div>
        </div>
      </footer>
    </div>
  );
};

export default NicholasSendykWebsite;