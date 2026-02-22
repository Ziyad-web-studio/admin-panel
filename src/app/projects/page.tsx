import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects | Strategic Tech Founder",
  description: "Selected engineering systems and technical architecture work.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-background py-96">
      <Container>
        <div className="mb-64 flex flex-col gap-16 items-start">
          <span className="text-small font-medium text-secondary uppercase tracking-widest">
            Portfolio
          </span>
          <h1 className="text-h1 font-bold text-primary">
            Selected Engineering Work.
          </h1>
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
    </main>
  );
}
