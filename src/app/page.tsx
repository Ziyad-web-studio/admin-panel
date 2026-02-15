import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Button from '@/components/Button';
import MusicWidget from '@/components/MusicWidget';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground overflow-x-hidden">
      <Navbar />

      <main className="flex-grow flex flex-col justify-center relative px-6 pt-32 pb-20">

        {/* Ambient Background */}
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-primary/5 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute top-[20%] right-[-10%] w-[50vw] h-[50vw] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div className="space-y-8 z-10 text-center lg:text-left">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-border/60 bg-white/50 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-muted-foreground shadow-sm dark:bg-white/10">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              Available for hire
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95] text-foreground">
              Creative
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Developer</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Crafting minimal, powerful, and intuitive web experiences.
              Focused on <span className="text-foreground font-medium">simplicity</span> and <span className="text-primary font-medium">interaction</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button href="/projects" variant="primary" size="lg" className="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                View Projects
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                Contact Me
              </Button>
            </div>
          </div>

          {/* Widget Area */}
          <div className="relative z-10 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-[3rem] blur-2xl opacity-50" />
              <div className="relative bg-white/80 dark:bg-black/40 backdrop-blur-xl border border-white/20 p-2 rounded-[3rem] shadow-float rotate-[-5deg] hover:rotate-0 transition-transform duration-500">
                 <MusicWidget />
              </div>
            </div>
          </div>

        </div>

      </main>
      <Footer />
    </div>
  );
}
