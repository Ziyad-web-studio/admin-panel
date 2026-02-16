import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Timeline from '@/components/Timeline';
import ToolsGrid from '@/components/ToolsGrid';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-5xl mx-auto w-full space-y-32">

        {/* Intro */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white">
            ABOUT <span className="text-accent">ME</span>.
          </h1>
          <div className="text-lg md:text-xl text-gray-400 space-y-6 leading-relaxed max-w-3xl font-light">
            <p>
              I am a software engineer with a passion for building digital products that solve real-world problems.
              My journey began with a curiosity for how things work, which led me to the world of programming.
            </p>
            <p>
              I specialize in full-stack development, with a focus on creating performant, accessible, and user-centric applications.
              I believe in writing clean, maintainable code and staying up-to-date with the latest technologies.
            </p>
          </div>
        </section>

        {/* Coding Journey */}
        <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="w-12 h-1 bg-highlight rounded-full" />
             <h2 className="text-3xl font-bold text-white">Coding Journey</h2>
          </div>
          <Timeline />
        </section>

        {/* Tools & Ecosystem */}
        <section>
          <div className="flex items-center gap-4 mb-12">
             <div className="w-12 h-1 bg-accent rounded-full" />
             <h2 className="text-3xl font-bold text-white">Tools & Ecosystem</h2>
          </div>
          <ToolsGrid />
        </section>

      </main>
      <Footer />
    </div>
  );
}
