import Image from "next/image";
import Container from "@/components/Container";

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

        {/* Right Column: Profile Image */}
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center rounded-full border-2 border-accent/30 bg-surface p-8 shadow-1">
            <Image
              src="/images/profile.JPG"
              alt="Profile silhouette"
              width={256}
              height={256}
              className="rounded-full object-cover grayscale"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
