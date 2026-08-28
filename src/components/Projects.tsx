import React, { useEffect, useRef, useState } from 'react';
import { featuredProjects, otherProjects } from '../data/projectsData';
import { ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import Reveal from './Reveal';

const ProjectCard: React.FC<{ project: any, featured?: boolean }> = ({ project, featured }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (isExpanded) return;
    const checkTruncation = () => {
      const el = descriptionRef.current;
      if (el) {
        setIsTruncated(el.scrollHeight > el.clientHeight + 1);
      }
    };
    checkTruncation();
    window.addEventListener('resize', checkTruncation);
    return () => window.removeEventListener('resize', checkTruncation);
  }, [project.description, isExpanded]);

  return (
    <div className={`card ${featured ? 'border-l-2 border-l-accent/60' : ''}`}>
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-lg text-ink">{project.name}</h3>
        {project.playStoreUrl && (
          <a
            href={project.playStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-faint hover:text-accent transition-colors"
            aria-label="View on Play Store"
          >
            <ExternalLink size={15} />
          </a>
        )}
      </div>

      <p ref={descriptionRef} className={`text-ink-soft text-sm mb-2 ${!isExpanded ? 'line-clamp-2' : ''}`}>
        {project.description}
      </p>

      {isTruncated && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-accent hover:text-accent-dark text-xs font-mono uppercase tracking-wide flex items-center mb-2"
        >
          {isExpanded ? (
            <>Show Less <ChevronUp size={14} className="ml-1" /></>
          ) : (
            <>Show More <ChevronDown size={14} className="ml-1" /></>
          )}
        </button>
      )}

      {project.technologies && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.technologies.map((tech: string, index: number) => (
            <span
              key={index}
              className="px-2 py-0.5 bg-transparent text-ink-soft text-xs font-mono border border-line"
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
      <Reveal>
        <h2 className="section-title"><span className="section-number">05</span>Projects</h2>

        <div className="mb-6">
          <h3 className="meta-label mb-3">Featured Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} featured={true} />
            ))}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div>
            <div className="flex justify-between items-center mb-3">
              <h3 className="meta-label">Other Projects</h3>
              <button
                onClick={() => setShowAll(!showAll)}
                className="btn-outline text-xs flex items-center"
              >
                {showAll ? (
                  <>Show Less <ChevronUp size={14} className="ml-1" /></>
                ) : (
                  <>Show All <ChevronDown size={14} className="ml-1" /></>
                )}
              </button>
            </div>

            {showAll && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                {otherProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            )}
          </div>
        )}
      </Reveal>
    </section>
  );
};

export default Projects;
