import React from 'react';
import { personalInfo, getAboutBio } from '../data/personalInfo';
import Reveal from './Reveal';

const About: React.FC = () => {
  return (
    <section id="about">
      <Reveal>
        <h2 className="section-title"><span className="section-number">01</span>About</h2>

        <div className="card max-w-2xl">
          <p className="text-ink-soft leading-relaxed mb-5">
            {getAboutBio()}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-t border-line pt-4">
            <div>
              <div className="meta-label mb-1">Phone</div>
              <div className="text-ink">{personalInfo.phone}</div>
            </div>
            <div>
              <div className="meta-label mb-1">Email</div>
              <div className="text-ink">{personalInfo.email}</div>
            </div>
            <div className="sm:col-span-2">
              <div className="meta-label mb-1">Address</div>
              <div className="text-ink">{personalInfo.address}</div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
};

export default About;
