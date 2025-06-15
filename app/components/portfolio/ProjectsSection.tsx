import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  link?: string;
  technologies?: string[];
}

interface ProjectsSectionProps {
  projects?: Project[];
}

export function ProjectsSection({ projects = [] }: ProjectsSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      
      {projects.length === 0 ? (
        <p className="text-muted-foreground">No projects added yet. Add your projects to showcase your work.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project.id} className="border border-border rounded-lg overflow-hidden">
              {project.image && (
                <div className="h-48 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 