import React from 'react';
import { Award } from 'lucide-react';
import { certifications } from '../data/certificationsData';

const Certifications: React.FC = () => {
  return (
    <section id="certifications">
      <h2 className="section-title mb-6">Training & Certifications</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="card hover:-translate-y-0.5 transition-all border-l-4 border-l-accent"
          >
            <div className="flex items-start">
              <div className="p-3 bg-primary/5 rounded-full mr-4">
                <Award size={24} className="text-accent-dark" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="text-secondary text-sm mb-2">
                    {cert.issuer}
                  </p>
                )}
                {cert.date && (
                  <p className="text-accent-dark text-sm">
                    {cert.date}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;