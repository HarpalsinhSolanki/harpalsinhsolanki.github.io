import React from 'react';
import { skillsByCategory } from '../data/skillsData';
import { Monitor, Cpu, Layers, Database, Settings } from 'lucide-react';
import Reveal from './Reveal';

type Category = "programming" | "framework" | "tool" | "database" | "other";

const categoryIcons = {
  programming: <Cpu size={15} />,
  framework: <Layers size={15} />,
  tool: <Settings size={15} />,
  database: <Database size={15} />,
  other: <Monitor size={15} />
};

const categoryTitles = {
  programming: "Programming Languages",
  framework: "Frameworks & Libraries",
  tool: "Tools & IDEs",
  database: "Databases",
  other: "Other Skills"
};

const Skills: React.FC = () => {
  const categories = Object.keys(skillsByCategory) as Category[];

  return (
    <section id="skills">
      <Reveal>
        <h2 className="section-title"><span className="section-number">03</span>Skills &amp; Expertise</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div key={category} className="card">
              <div className="flex items-center gap-2 mb-3 text-ink-faint">
                {categoryIcons[category]}
                <h3 className="meta-label">{categoryTitles[category]}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 border border-line text-sm text-ink-soft hover:border-accent/40 hover:text-ink transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
};

export default Skills;
