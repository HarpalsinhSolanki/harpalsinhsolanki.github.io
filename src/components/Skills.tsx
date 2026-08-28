import React, { useState } from 'react';
import { skillsByCategory } from '../data/skillsData';
import { Monitor, Cpu, Layers, Database, Settings } from 'lucide-react';
import Reveal from './Reveal';

const SkillProgress: React.FC<{ name: string, level: number, years: number }> = ({ name, level, years }) => {
  const percentage = (level / 5) * 100;

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-medium text-ink text-sm">{name}</span>
        <span className="text-xs text-ink-faint font-mono">{years}y</span>
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
  programming: <Cpu size={16} />,
  framework: <Layers size={16} />,
  tool: <Settings size={16} />,
  database: <Database size={16} />,
  other: <Monitor size={16} />
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
      <Reveal>
        <h2 className="section-title"><span className="section-number">03</span>Skills &amp; Expertise</h2>

        <div className="mb-5">
          <div className="flex flex-wrap gap-2">
            {(Object.keys(skillsByCategory) as Category[]).map((category) => (
              <button
                key={category}
                className={`px-3 py-2 font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 border transition-colors
                  ${activeCategory === category
                    ? 'bg-ink text-paper border-ink'
                    : 'bg-transparent text-ink-soft border-line hover:border-ink/40 hover:text-ink'
                  }`}
                onClick={() => setActiveCategory(category)}
              >
                {categoryIcons[category]}
                <span className="hidden sm:inline">{categoryTitles[category]}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-lg mb-4 text-ink flex items-center gap-2">
            {categoryIcons[activeCategory]}
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
      </Reveal>
    </section>
  );
};

export default Skills;
