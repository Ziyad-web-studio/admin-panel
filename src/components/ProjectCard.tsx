import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';
import ProjectStatusBadge from './ProjectStatusBadge';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-card rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-float flex flex-col h-full border border-white/5 hover:border-accent/30">
      <div className="aspect-video w-full bg-secondary relative overflow-hidden">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-white/5 text-muted-foreground/30 font-mono text-xs uppercase tracking-widest">
            No Preview
          </div>
        )}

        <div className="absolute top-4 left-4 z-10">
          <ProjectStatusBadge status={project.status || 'Completed'} />
        </div>

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight text-black p-3.5 rounded-full hover:scale-110 transition-transform duration-300 shadow-[0_0_20px_rgba(191,255,0,0.5)]"
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
              className="bg-white text-black p-3.5 rounded-full hover:bg-white/90 hover:scale-110 transition-all duration-300"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col flex-grow bg-gradient-to-b from-white/5 to-transparent">
        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed font-light">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-mono font-medium px-3 py-1 rounded-full bg-black/40 text-gray-300 border border-white/10 uppercase tracking-wide"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
