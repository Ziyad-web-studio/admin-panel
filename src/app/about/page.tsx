import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const skills = [
    'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js',
    'GraphQL', 'PostgreSQL', 'Three.js', 'Framer Motion'
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full space-y-24">

        {/* Biography Section */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Me
          </h1>
          <div className="text-lg md:text-xl text-muted-foreground space-y-6 leading-relaxed">
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
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-100 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-3">
            Technical Arsenal
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-secondary/80 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Vision / Future Goals */}
        <section className="animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200 space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground flex items-center gap-3">
            Future Vision
          </h2>
          <div className="p-8 bg-card rounded-3xl shadow-card border border-border relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[64px] rounded-full pointer-events-none group-hover:bg-primary/20 transition-colors duration-500" />
            <p className="text-lg text-muted-foreground relative z-10 leading-relaxed">
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
