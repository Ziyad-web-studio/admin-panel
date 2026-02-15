import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-float flex flex-col h-full border border-border/50">
      <div className="aspect-video w-full bg-secondary relative overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-secondary text-muted-foreground/50 font-medium text-sm">
            No Preview
          </div>
        )}

        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-3.5 rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
              title="Live Demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/50 text-white p-3.5 rounded-full backdrop-blur-md hover:bg-black/70 hover:scale-110 transition-all duration-300 border border-white/20"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-medium px-3 py-1 rounded-full bg-secondary text-secondary-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
