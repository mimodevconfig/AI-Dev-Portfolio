import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from './Projects';
import { cn } from '../lib/utils';

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  
  // Find current project and its index
  const currentIndex = projects.findIndex(p => p.id === id);
  const project = projects[currentIndex];
  
  // Calculate previous and next project indices
  const prevIndex = currentIndex > 0 ? currentIndex - 1 : projects.length - 1;
  const nextIndex = currentIndex < projects.length - 1 ? currentIndex + 1 : 0;
  
  // Get previous and next projects
  const prevProject = projects[prevIndex];
  const nextProject = projects[nextIndex];

  // Scroll to top when component mounts or when the URL changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        navigate(`/project/${prevProject.id}`);
      } else if (e.key === 'ArrowRight') {
        navigate(`/project/${nextProject.id}`);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate, prevProject.id, nextProject.id]);

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center pt-16">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 justify-center">
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-24">
      <div className="container mx-auto max-w-4xl px-4">
        <Link to="/#projects" className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8">
          <ArrowLeft className="w-5 h-5" />
          Back to Projects
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="h-64 sm:h-80 overflow-hidden relative">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
              <div className="p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <project.icon className="w-8 h-8" />
                  <h1 className="text-2xl sm:text-3xl font-bold">{project.title}</h1>
                </div>
                <p className="text-white/80 max-w-2xl">{project.description}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 sm:p-8">
            <div className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Key Impact</h2>
                <div className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-3 rounded-lg">
                  {project.impact}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Technologies Used</h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Challenges Faced</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400">
                  {project.challenges.map((challenge, index) => (
                    <li key={index}>{challenge}</li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Solution</h2>
                <p className="text-gray-600 dark:text-gray-400">{project.solution}</p>
              </section>

              <section>
                <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Future Development</h2>
                <p className="text-gray-600 dark:text-gray-400">{project.futureNotes}</p>
              </section>
            </div>
          </div>
        </div>

        {/* Project Navigation */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          <Link 
            to={`/project/${prevProject.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Previous Project</div>
              <div className="font-medium text-gray-900 dark:text-white">{prevProject.title}</div>
            </div>
          </Link>
          
          <Link 
            to={`/project/${nextProject.id}`}
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 flex items-center justify-end gap-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <div className="text-right">
              <div className="text-sm text-gray-500 dark:text-gray-400">Next Project</div>
              <div className="font-medium text-gray-900 dark:text-white">{nextProject.title}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </Link>
        </div>

        {/* Mobile-friendly swipe navigation hint */}
        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 md:hidden">
          <p>Use left/right arrow keys to navigate between projects</p>
        </div>
      </div>
    </div>
  );
}
