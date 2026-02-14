export default function Footer() {
  return (
    <footer className="border-t border-accent/20 bg-primary-bg py-8 mt-auto z-10 relative">
      <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} Minimal Futuristic Portfolio. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="hover:text-highlight transition-colors duration-300">GitHub</a>
          <a href="#" className="hover:text-highlight transition-colors duration-300">Twitter</a>
          <a href="#" className="hover:text-highlight transition-colors duration-300">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
