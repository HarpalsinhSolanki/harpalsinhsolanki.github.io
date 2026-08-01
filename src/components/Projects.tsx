import React, { useState } from 'react';
import { projects, featuredProjects, otherProjects } from '../data/projectsData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const ProjectCard: React.FC<{ project: any, featured?: boolean }> = ({ project, featured }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`card ${featured ? 'border-l-4 border-l-accent' : ''}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg font-semibold text-primary">{project.name}</h3>
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-dark hover:text-primary transition-colors"
            aria-label="View on Play Store"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>

      <p className={`text-text text-sm mb-2 ${!isExpanded && project.description.length > 150 ? 'line-clamp-2' : ''}`}>
        {project.description}
      </p>

      {project.description.length > 150 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent-dark hover:text-primary text-xs font-medium flex items-center mb-2"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={14} className="ml-1" /></>
          ) : (
            <>Show More <ChevronDown size={14} className="ml-1" /></>
          )}
        </button>
      )}

      {project.technologies && (
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2.5 py-1 rounded-full bg-secondary-light/10 text-secondary text-xs font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="projects">
      <h2 className="section-title mb-6">Projects</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-primary mb-3">Featured Projects</h3>
        <div className="space-y-4">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} featured={true} />
          ))}
        </div>
      </div>

      {otherProjects.length > 0 && (
        <div>
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-semibold text-primary">Other Projects</h3>
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn btn-outline text-xs flex items-center"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={14} className="ml-1" /></>
              ) : (
                <>Show All <ChevronDown size={14} className="ml-1" /></>
              )}
            </button>
          </div>

          {showAll && (
            <div className="space-y-3">
              {otherProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default Projects;
