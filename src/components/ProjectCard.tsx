import React from "react";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isCompleted = project.status === "completed";
  const isDraft = project.status === "draft";
  const isActive = project.status === "active";

  const borderColor = isCompleted ? "border-accent/30" : "border-border";
  const opacity = isDraft ? "opacity-50" : "";

  return (
    <div
      className={`group flex h-full flex-col justify-between rounded-lg border ${borderColor} bg-surface p-32 shadow-1 transition-transform duration-200 hover:-translate-y-8 ${opacity}`}
    >
      <div>
        <div className="mb-16 flex items-center justify-between">
          <h3 className="text-h2 font-semibold text-primary">{project.title}</h3>
          {isActive && (
            <div className="flex items-center gap-8 rounded-full bg-highlight/10 px-8 py-0">
              <span className="h-8 w-8 rounded-full bg-highlight" />
              <span className="text-chip text-highlight">Active</span>
            </div>
          )}
        </div>
        <p className="mb-24 text-body text-secondary">
          {project.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-8">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full bg-background px-8 py-0 text-chip text-secondary border border-border"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
