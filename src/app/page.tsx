import Image from "next/image";
import Container from "@/components/Container";
import AbstractSystemCard from "@/components/AbstractSystemCard";
import ProjectsSection from "@/components/ProjectsSection";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main>
      <Container className="flex min-h-screen flex-col items-center justify-center py-64 md:py-96">
        <div className="grid w-full grid-cols-1 gap-64 lg:grid-cols-2 lg:gap-96">
          {/* Item 1: Profile Image (Mobile: Top, Desktop: Top Right) */}
          <div className="flex items-center justify-center order-1 lg:col-start-2 lg:row-start-1">
            <div className="flex items-center justify-center rounded-full border-2 border-accent/30 bg-surface p-8 shadow-1">
              <Image
                src="/images/profile.jpg"
                alt="Profile silhouette"
                width={256}
                height={256}
                className="rounded-full object-cover grayscale"
              />
            </div>
          </div>

          {/* Item 2: Strategic Content (Mobile: Middle, Desktop: Left Column) */}
          <div className="flex flex-col justify-center gap-32 order-2 lg:col-start-1 lg:row-start-1 lg:row-span-2 self-center">
            <h1 className="text-h1 text-primary">
              Engineering Structured Digital Systems.
            </h1>
            <p className="text-body text-secondary max-w-prose">
              I build scalable architectures and robust systems for forward-thinking companies.
              My focus is on long-term maintainability, clean code patterns, and strategic technical leadership.
              Not just code, but engineered solutions.
            </p>
            <div className="flex flex-col gap-16 sm:flex-row">
              <a
                href="/projects"
                className="inline-flex items-center justify-center rounded bg-accent px-32 py-16 text-body font-medium text-primary transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded border border-border bg-transparent px-32 py-16 text-body font-medium text-primary transition-colors hover:bg-surface"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Item 3: Dashboard Card (Mobile: Bottom, Desktop: Bottom Right) */}
          <div className="flex items-center justify-center order-3 lg:col-start-2 lg:row-start-2">
            <AbstractSystemCard />
          </div>
        </div>
      </Container>

      <ProjectsSection projects={projects} />
    </main>
  );
}
