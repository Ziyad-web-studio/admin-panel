"use client";

import React from "react";
import ProjectCard from "@/components/ProjectCard";
import Container from "@/components/Container";
import type { Project } from "@/data/projects";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section className="bg-background py-96">
      <Container>
        <div className="mb-64 flex flex-col items-start gap-16">
          <span className="text-small font-medium text-secondary uppercase tracking-widest">
            Selected Work
          </span>
          <h2 className="text-h1 font-bold text-primary">
            Featured Projects.
          </h2>
          <p className="max-w-2xl text-body text-secondary">
            A curated selection of technical solutions engineered for scale,
            performance, and business impact. Focused on solving complex
            problems with structured architecture.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-32 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
