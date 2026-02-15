export default function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12 mt-auto z-10 relative">
      <div className="max-w-4xl mx-auto px-4 text-center text-muted-foreground text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
        <div className="mt-6 flex justify-center gap-8">
          <a href="#" className="hover:text-foreground transition-colors duration-300">GitHub</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
