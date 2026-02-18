import Link from "next/link";
import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-sm">
      <Container className="flex h-64 items-center justify-between">
        <div className="flex items-center gap-16">
          <Link href="/" className="text-body font-semibold text-primary">
            Portfolio
          </Link>
        </div>
        <nav className="flex items-center gap-24">
          <Link href="/" className="text-body text-secondary hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/projects" className="text-body text-secondary hover:text-primary transition-colors">
            Projects
          </Link>
          <Link href="/contact" className="text-body text-secondary hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </Container>
    </header>
  );
}
