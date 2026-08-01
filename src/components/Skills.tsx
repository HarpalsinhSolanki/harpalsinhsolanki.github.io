import React, { useState } from 'react';
import { skillsByCategory } from '../data/skillsData';
import { Monitor, Cpu, Layers, Database, Settings } from 'lucide-react';

const SkillProgress: React.FC<{ name: string, level: number, years: number }> = ({ name, level, years }) => {
  const percentage = (level / 5) * 100;
  
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-medium text-primary text-sm">{name}</span>
        <span className="text-xs text-secondary">{years}y</span>
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
    <section id="skills">
      <h2 className="section-title mb-6">Skills & Expertise</h2>

      <div className="mb-5">
        <div className="flex flex-wrap gap-2">
          {(Object.keys(skillsByCategory) as Category[]).map((category) => (
            <button
              key={category}
              className={`px-3 py-2 rounded-full font-medium text-xs flex items-center transition-colors
                ${activeCategory === category
                  ? 'bg-primary text-white'
                  : 'bg-white text-secondary border border-slate-200 hover:border-accent hover:text-accent-dark'
                }`}
              onClick={() => setActiveCategory(category)}
            >
              <span className="mr-1.5 [&>svg]:w-4 [&>svg]:h-4">
                {categoryIcons[category]}
              </span>
              <span className="hidden sm:inline">{categoryTitles[category]}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="card">
        <h3 className="text-lg font-semibold mb-4 text-primary flex items-center">
          <span className="mr-2 [&>svg]:w-5 [&>svg]:h-5">
            {categoryIcons[activeCategory]}
          </span>
          {categoryTitles[activeCategory]}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
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