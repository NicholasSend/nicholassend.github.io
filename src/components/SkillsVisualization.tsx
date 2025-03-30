import React, { useState, useEffect } from 'react';
import { BarChart, TrendingUp, Database, Brain, Layers, Cloud } from 'lucide-react';

interface SkillsVisualizationProps {
  isDarkMode: boolean;
}

const SkillsVisualization: React.FC<SkillsVisualizationProps> = ({ isDarkMode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  const skillsData = [
    { 
      skill: 'Software Development', 
      level: 85, 
      icon: <BarChart className="mr-2" />,
      color: 'from-blue-500 to-blue-600',
      description: 'Proficient in multiple programming languages including JavaScript, Python, and Java. Experienced with modern frameworks and best practices.'
    },
    { 
      skill: 'Data Engineering', 
      level: 78, 
      icon: <Database className="mr-2" />,
      color: 'from-purple-500 to-purple-600',
      description: 'Skilled in building data pipelines, ETL processes, and data warehousing solutions. Experience with SQL, NoSQL, and distributed systems.'
    },
    { 
      skill: 'Machine Learning & AI', 
      level: 82, 
      icon: <Brain className="mr-2" />,
      color: 'from-green-500 to-green-600',
      description: 'Expert in developing and deploying machine learning models. Experienced with deep learning, NLP, and computer vision applications.'
    },
    { 
      skill: 'Product Management', 
      level: 72, 
      icon: <Layers className="mr-2" />,
      color: 'from-yellow-500 to-yellow-600',
      description: 'Experienced in product strategy, roadmap development, and cross-functional team leadership. Strong focus on user-centered design.'
    },
    { 
      skill: 'Cloud Services', 
      level: 76, 
      icon: <Cloud className="mr-2" />,
      color: 'from-red-500 to-red-600',
      description: 'Extensive experience with AWS and Azure cloud platforms. Proficient in cloud architecture, serverless computing, and containerization.'
    }
  ];

  // Animation effect when component mounts
  useEffect(() => {
    setIsVisible(true);
  }, []);



  return (
    <div className={`max-w-5xl mx-auto p-6 rounded-xl transition-colors duration-500 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-lg`}>
      {/* Header
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <TrendingUp className="mr-2" />
          Professional Skills
        </h2>
      </div> */}

      {/* Skills visualization */}
      <div className="space-y-6">
        {skillsData.map((item, index) => (
          <div 
            key={index} 
            className={`transition-all duration-500 transform ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`} 
            style={{ transitionDelay: `${index * 150}ms` }}
            onMouseEnter={() => setActiveSkill(index)}
            onMouseLeave={() => setActiveSkill(null)}
          >
            <div className="flex justify-between mb-2">
              <div className="flex items-center">
                <span className={`${isDarkMode ? 'text-gray-100' : 'text-gray-800'}`}>
                  {item.icon}
                </span>
                <span className="font-medium text-lg">{item.skill}</span>
              </div>
              <span className={`font-bold ${item.level > 80 ? 'text-green-500' : item.level > 60 ? 'text-blue-500' : 'text-yellow-500'}`}>
                {item.level}%
              </span>
            </div>
            
            {/* Skill bar */}
            <div className={`h-3 rounded-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} overflow-hidden`}>
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-1000 ease-out`}
                style={{ 
                  width: `${isVisible ? item.level : 0}%`,
                  boxShadow: activeSkill === index ? '0 0 8px rgba(255, 255, 255, 0.5)' : 'none'
                }}
              ></div>
            </div>
            
            {/* Description - only shows when hovering */}
            <div 
              className={`mt-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} transition-all duration-300 overflow-hidden`}
              style={{ 
                maxHeight: activeSkill === index ? '100px' : '0px',
                opacity: activeSkill === index ? 1 : 0
              }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
        <div className="flex justify-between text-xs">
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Beginner</span>
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Intermediate</span>
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Advanced</span>
          <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Expert</span>
        </div>
        <div className={`h-1 mt-1 rounded-full bg-gradient-to-r ${isDarkMode ? 'from-gray-600 via-gray-500 to-gray-300' : 'from-gray-400 via-gray-500 to-gray-700'}`}></div>
      </div>
      
      {/* Hover instruction */}
      <p className={`text-center mt-4 text-sm italic ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Hover over each skill for more details
      </p>
    </div>
  );
};

export default SkillsVisualization;