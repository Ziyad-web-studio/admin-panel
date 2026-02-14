import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-bg text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow flex flex-col justify-center items-center relative overflow-hidden px-4 pt-16">
        {/* Background Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-[80px] pointer-events-none" />

        <div className="z-10 max-w-5xl text-center space-y-8 animate-in fade-in zoom-in duration-1000">
          <div className="inline-block mb-4 px-4 py-1 border border-highlight/30 rounded-full bg-highlight/5 text-highlight text-xs font-mono uppercase tracking-[0.2em] backdrop-blur-sm">
            Available for hire
          </div>

          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-6 leading-none">
            CREATIVE
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent bg-300% animate-gradient">DEVELOPER</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Crafting minimal, powerful, and futuristic web experiences.
            Focused on <span className="text-white font-medium">performance</span> and <span className="text-highlight font-medium">interaction</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <Link
              href="/projects"
              className="group relative px-8 py-4 bg-accent text-white font-bold rounded-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(138,43,226,0.6)] uppercase tracking-widest text-sm"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 h-full w-full scale-0 rounded-sm transition-all duration-300 group-hover:scale-100 group-hover:bg-accent/80" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 border border-white/10 text-white font-bold rounded-sm hover:bg-white/5 hover:border-highlight/50 hover:text-highlight hover:shadow-[0_0_30px_rgba(191,255,0,0.1)] transition-all duration-300 uppercase tracking-widest text-sm"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
