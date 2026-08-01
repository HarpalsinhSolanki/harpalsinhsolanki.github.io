import React, { useState } from 'react';
import { skillsByCategory } from '../data/skillsData';
import { Monitor, Cpu, Layers, Database, Settings } from 'lucide-react';

const SkillProgress: React.FC<{ name: string, level: number, years: number }> = ({ name, level, years }) => {
  const percentage = (level / 5) * 100;
  
  return (
    <div className="mb-2">
      <div className="flex justify-between items-center mb-1">
        <span className="font-medium text-black text-sm">{name}</span>
        <span className="text-xs text-gray-600">{years}y</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

type Category = "programming" | "framework" | "tool" | "database" | "other";

const categoryIcons = {
  programming: <Cpu className="text-accent-dark" />,
  framework: <Layers className="text-accent-dark" />,
  tool: <Settings className="text-accent-dark" />,
  database: <Database className="text-accent-dark" />,
  other: <Monitor className="text-accent-dark" />
};

const categoryTitles = {
  programming: "Programming Languages",
  framework: "Frameworks & Libraries",
  tool: "Tools & IDEs",
  database: "Databases",
  other: "Other Skills"
};

const Skills: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("programming");
  
  return (
    <section id="skills" className="py-6">
      <h2 className="section-title mb-4">Skills & Expertise</h2>
      
      <div className="mb-4">
        <div className="bg-white p-2 flex flex-wrap gap-1">
          {(Object.keys(skillsByCategory) as Category[]).map((category) => (
            <button
              key={category}
              className={`px-2 py-1 font-medium text-xs flex items-center
                ${activeCategory === category 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="mr-1">
                {categoryIcons[category]}
              </span>
              <span className="hidden sm:inline">{categoryTitles[category]}</span>
            </button>
          ))}
        </div>
      </div>
      
      <div className="card">
        <h3 className="text-lg font-semibold mb-3 text-black flex items-center">
          <span className="mr-1">
            {categoryIcons[activeCategory]}
          </span>
          {categoryTitles[activeCategory]}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {skillsByCategory[activeCategory].map((skill, index) => (
            <SkillProgress 
              key={index}
              name={skill.name}
              level={skill.level}
              years={skill.experienceYears}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;