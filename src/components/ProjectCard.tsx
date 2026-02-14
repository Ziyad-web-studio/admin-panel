import { Project } from '@/types';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-black/40 border border-accent/20 rounded-xl overflow-hidden hover:border-accent/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.15)] flex flex-col h-full backdrop-blur-sm">
      <div className="aspect-video w-full bg-gray-900 relative overflow-hidden group/image">
        {project.thumbnail ? (
          <img
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-accent/5 text-accent/40 font-mono text-xs uppercase tracking-widest border-b border-accent/10">
            No Preview
          </div>
        )}

        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-highlight text-black p-3 rounded-full hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_0_15px_rgba(191,255,0,0.4)]"
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
              className="bg-white/10 text-white p-3 rounded-full backdrop-blur-md hover:bg-white/30 hover:scale-110 transition-all duration-300 border border-white/20"
              title="View Code"
            >
              <Github size={20} />
            </a>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-1">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.techStack.map((tech) => (
            <span key={tech} className="text-[10px] font-mono px-2 py-1 rounded bg-accent/5 text-accent border border-accent/20 uppercase tracking-wider">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
