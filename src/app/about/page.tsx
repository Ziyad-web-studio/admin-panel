import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'GraphQL', 'PostgreSQL', 'Three.js', 'Framer Motion'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-primary-bg selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 max-w-4xl mx-auto w-full text-foreground space-y-24">

        {/* Biography Section */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700">
          <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter">
            ABOUT <span className="text-accent">ME</span>.
          </h1>
          <div className="text-lg md:text-xl text-gray-400 space-y-6 leading-relaxed">
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

        {/* Skills Section */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
            <span className="w-8 h-1 bg-highlight rounded-full"></span>
            TECHNICAL ARSENAL
          </h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 border border-white/10 rounded-full text-gray-300 hover:text-highlight hover:border-highlight/50 transition-colors duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Vision / Future Goals */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white flex items-center gap-4">
            <span className="w-8 h-1 bg-accent rounded-full"></span>
            FUTURE VISION
          </h2>
          <div className="p-8 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 blur-[64px] rounded-full pointer-events-none group-hover:bg-accent/30 transition-colors duration-500" />
            <p className="text-lg text-gray-300 relative z-10 leading-relaxed">
              My goal is to leverage emerging technologies like AI and Web3 to build decentralized, intelligent applications that empower individuals.
              I am constantly exploring new paradigms in software architecture and user experience design to push the boundaries of what is possible on the web.
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
