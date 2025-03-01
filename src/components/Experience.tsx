import React from 'react';
import { Building2, Award } from 'lucide-react';
import { SplashCursor } from './ui/splash-cursor';

const experiences = [
  {
    company: 'TechCorp AI',
    role: 'Lead AI Product Developer',
    period: '2022 - Present',
    achievements: [
      'Led team of 8 engineers in developing enterprise AI solutions',
      'Increased ML model accuracy by 35% through innovative preprocessing',
      'Reduced infrastructure costs by 60% through optimization',
    ],
  },
  {
    company: 'DataTech Solutions',
    role: 'Senior ML Engineer',
    period: '2020 - 2022',
    achievements: [
      'Developed NLP pipeline processing 1M+ documents daily',
      'Implemented automated ML deployment reducing release time by 70%',
      'Mentored 5 junior engineers in ML best practices',
    ],
  },
  {
    company: 'AI Innovations Inc',
    role: 'AI Product Developer',
    period: '2018 - 2020',
    achievements: [
      'Built computer vision system with 99.5% accuracy',
      'Reduced model training time by 45% through distributed computing',
      'Collaborated with 3 product teams to integrate AI capabilities',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 bg-ide-bg-secondary">
      <div className="absolute inset-0 opacity-20">
        <SplashCursor
          DENSITY_DISSIPATION={2.5}
          VELOCITY_DISSIPATION={1.5}
          PRESSURE={0.2}
          SPLAT_RADIUS={0.3}
          COLOR_UPDATE_SPEED={5}
          BACK_COLOR={{ r: 0.2, g: 0.2, b: 0.2 }}
        />
      </div>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Track record of delivering innovative AI solutions and leading high-performing teams.
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-ide-ui-border"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 -mt-2">
                  <div className="w-4 h-4 rounded-full bg-ide-text-link border-4 border-ide-bg-primary"></div>
                </div>
                
                <div className={`flex ${index % 2 === 0 ? 'flex-row-reverse' : ''} items-center`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-ide-bg-dropdown p-6 rounded-xl shadow-sm border border-ide-ui-border">
                      <div className="flex items-center gap-3 mb-4">
                        <Building2 className="w-5 h-5 text-ide-text-link" />
                        <h3 className="text-xl font-semibold">{exp.company}</h3>
                      </div>
                      <div className="mb-4">
                        <div className="text-lg font-medium">{exp.role}</div>
                        <div className="text-ide-text-secondary">{exp.period}</div>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-2">
                            <Award className="w-5 h-5 text-ide-text-link mt-1 flex-shrink-0" />
                            <span className="text-ide-text-secondary">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
