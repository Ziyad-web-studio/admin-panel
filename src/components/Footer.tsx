import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border bg-surface py-32">
      <Container className="flex flex-col items-center justify-between md:flex-row">
        <div className="flex flex-col gap-8 md:flex-row md:gap-32">
          <p className="text-small text-secondary">
            © {new Date().getFullYear()} Strategic Tech Founder. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
