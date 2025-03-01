import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Cpu, Database, LineChart, Workflow, FileText } from 'lucide-react';

export const projects = [
  {
    id: 'ai-analytics-platform',
    title: 'AI-Powered Analytics Platform',
    description: 'Developed a predictive analytics platform processing 1M+ daily transactions with 99.9% accuracy.',
    impact: '45% reduction in customer churn',
    tech: ['TensorFlow', 'Python', 'React', 'AWS'],
    icon: LineChart,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    challenges: [
      'Scaling to handle 1M+ daily transactions',
      'Real-time prediction requirements',
      'Complex data integration from multiple sources'
    ],
    solution: 'Implemented distributed processing using AWS Lambda and ECS, with a custom-built ML pipeline for real-time predictions. Used TensorFlow Serving for model deployment and Redis for caching.',
    futureNotes: 'Planning to implement A/B testing framework and automated model retraining pipeline.'
  },
  {
    id: 'nlp-customer-service',
    title: 'NLP Customer Service Bot',
    description: 'Built an intelligent chatbot handling 10k+ daily customer inquiries across 5 languages.',
    impact: '70% reduction in response time',
    tech: ['GPT-3', 'Node.js', 'MongoDB', 'Docker'],
    icon: Bot,
    image: 'https://images.unsplash.com/photo-1535378917042-10a22c95931a',
    challenges: [
      'Multi-language support and context management',
      'Real-time response generation',
      'Integration with existing customer service tools'
    ],
    solution: 'Developed a custom context management system with MongoDB, implemented language-specific fine-tuning for GPT-3, and created a robust fallback system for complex queries.',
    futureNotes: 'Exploring integration with voice channels and sentiment analysis capabilities.'
  },
  {
    id: 'ml-infrastructure',
    title: 'ML Infrastructure Pipeline',
    description: 'Architected scalable ML pipeline processing 500TB+ of training data.',
    impact: '85% improvement in model training time',
    tech: ['Kubernetes', 'PyTorch', 'GCP', 'Apache Beam'],
    icon: Cpu,
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31',
    challenges: [
      'Managing large-scale distributed training',
      'Data preprocessing bottlenecks',
      'Resource optimization across clusters'
    ],
    solution: 'Built a custom orchestration layer on Kubernetes, implemented distributed data preprocessing with Apache Beam, and developed auto-scaling policies for cost optimization.',
    futureNotes: 'Planning to implement automated infrastructure testing and disaster recovery procedures.'
  },
  {
    id: 'edge-ai-server',
    title: 'Edge AI Inference Server',
    description: 'Built a high-performance local inference server for real-time AI model serving with minimal latency.',
    impact: '95% cost reduction vs cloud inference',
    tech: ['ONNX Runtime', 'C++', 'CUDA', 'TensorRT'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1591808216268-ce0b82787efe',
    challenges: [
      'Optimizing inference latency',
      'Hardware compatibility issues',
      'Model optimization for edge devices'
    ],
    solution: 'Implemented custom CUDA kernels for critical operations, developed model quantization pipeline, and created a hardware abstraction layer for cross-platform compatibility.',
    futureNotes: 'Exploring integration with federated learning systems and edge-specific model compression techniques.'
  },
  {
    id: 'ai-workflow-automation',
    title: 'AI Workflow Automation',
    description: 'Developed custom AI agents in n8n for automated data processing and decision-making workflows.',
    impact: '80% reduction in manual tasks',
    tech: ['n8n', 'OpenAI', 'Python', 'REST APIs'],
    icon: Workflow,
    image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a',
    challenges: [
      'Complex workflow orchestration',
      'Integration with legacy systems',
      'Error handling and recovery'
    ],
    solution: 'Created modular AI agents with robust error handling, implemented custom n8n nodes for AI operations, and developed a monitoring dashboard for workflow performance.',
    futureNotes: 'Planning to add predictive maintenance capabilities and workflow optimization suggestions.'
  },
  {
    id: 'smart-note-composer',
    title: 'Smart Note Composer',
    description: 'Created an AI-powered note-taking assistant for Obsidian.md with semantic search and auto-linking.',
    impact: '3x faster note organization',
    tech: ['TypeScript', 'LangChain', 'Vector DB', 'Obsidian API'],
    icon: FileText,
    image: 'https://images.unsplash.com/photo-1512314889357-e157c22f938d',
    challenges: [
      'Real-time semantic analysis',
      'Efficient vector search implementation',
      'Plugin performance optimization'
    ],
    solution: 'Implemented incremental indexing for real-time updates, developed custom vector store for Obsidian, and created an intelligent linking system using LangChain.',
    futureNotes: 'Exploring integration with external knowledge bases and collaborative note-taking features.'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From edge computing to workflow automation, delivering innovative AI solutions that transform industries.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              to={`/project/${project.id}`}
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <project.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="text-green-600 dark:text-green-400 font-semibold">
                    Impact: {project.impact}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
