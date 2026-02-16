import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import MusicSection from '@/components/MusicSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-white overflow-x-hidden">
      <Navbar />

      <main className="flex-grow relative">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[40vw] h-[40vw] bg-highlight/5 rounded-full blur-[100px]" />
        </div>

        {/* Hero Section */}
        <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto pt-20">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/5 bg-white/5 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
              <span className="w-2 h-2 rounded-full bg-highlight mr-3 animate-pulse shadow-[0_0_10px_rgba(191,255,0,0.5)]"></span>
              Minimal Thinker
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-white">
              BUILDING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent to-accent bg-200% animate-gradient">THE FUTURE</span>.
            </h1>

            <p className="text-lg md:text-xl text-gray-400 max-w-xl font-light leading-relaxed">
              Crafting calm, intelligent, and structured digital experiences.
              Focused on <span className="text-white font-medium">clarity</span>, <span className="text-accent font-medium">elegance</span>, and <span className="text-highlight font-medium">performance</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link href="/projects" className="group relative inline-flex items-center justify-center px-8 py-4 bg-accent text-white font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.4)] uppercase tracking-widest text-sm">
                <span className="relative z-10 mr-2">View Projects</span>
                <ArrowRight size={16} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-accent/80" />
              </Link>

              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 border border-white/10 text-white font-bold rounded-full hover:bg-white/5 hover:border-white/20 transition-all duration-300 uppercase tracking-widest text-sm">
                About Me
              </Link>
            </div>
          </div>
        </section>

        {/* Music Section (Preview) */}
        <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/5">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Sonic Focus</h2>
              <p className="text-gray-400">Tracks that fuel the creative process.</p>
            </div>
          </div>
          <MusicSection />
        </section>

      </main>
      <Footer />
    </div>
  );
}
