import Container from "@/components/Container";
import AbstractSystemCard from "@/components/AbstractSystemCard";

export default function Home() {
  return (
    <Container className="flex min-h-screen flex-col items-center justify-center py-64 md:py-96">
      <div className="grid w-full grid-cols-1 gap-64 lg:grid-cols-2 lg:gap-96">
        {/* Left Column: Strategic Content */}
        <div className="flex flex-col justify-center gap-32">
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
              className="inline-flex items-center justify-center rounded-lg bg-accent px-32 py-16 text-body font-medium text-primary transition-opacity hover:opacity-90"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-transparent px-32 py-16 text-body font-medium text-primary transition-colors hover:bg-surface"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Column: Abstract System Card */}
        <div className="flex items-center justify-center">
          <AbstractSystemCard />
        </div>
      </div>
    </Container>
  );
}
