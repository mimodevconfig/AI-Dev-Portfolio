import React from 'react';
import { Code2, Database, Brain, Workflow, Award, PenTool as Tool } from 'lucide-react';

const skills = {
  technical: [
    'TensorFlow/PyTorch',
    'Python/JavaScript',
    'React/Node.js',
    'SQL/NoSQL',
    'Docker/Kubernetes',
    'AWS/GCP',
  ],
  methodologies: [
    'Agile Development',
    'CI/CD',
    'TDD',
    'Design Thinking',
    'MLOps',
    'Scrum',
  ],
  certifications: [
    'AWS Machine Learning Specialty',
    'Google Cloud Professional ML Engineer',
    'TensorFlow Developer Certificate',
    'Scrum Professional Certification',
  ],
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-ide-bg-primary">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-ide-text-secondary max-w-2xl mx-auto">
            Comprehensive technical expertise combined with strong product development capabilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-ide-bg-dropdown rounded-xl p-6 shadow-sm border border-ide-ui-border">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="w-6 h-6 text-ide-text-link" />
              <h3 className="text-xl font-semibold">Technical Skills</h3>
            </div>
            <ul className="space-y-3">
              {skills.technical.map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ide-text-link rounded-full"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-ide-bg-dropdown rounded-xl p-6 shadow-sm border border-ide-ui-border">
            <div className="flex items-center gap-3 mb-6">
              <Workflow className="w-6 h-6 text-ide-text-link" />
              <h3 className="text-xl font-semibold">Methodologies</h3>
            </div>
            <ul className="space-y-3">
              {skills.methodologies.map((method, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ide-text-link rounded-full"></span>
                  <span>{method}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-ide-bg-dropdown rounded-xl p-6 shadow-sm border border-ide-ui-border">
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-ide-text-link" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {skills.certifications.map((cert, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-ide-text-link rounded-full"></span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
