import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-primary-bg selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-4 max-w-4xl mx-auto w-full text-foreground space-y-24">

        <section className="text-center animate-in fade-in zoom-in duration-1000">
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-4 leading-none">
            GET IN
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-highlight">TOUCH</span>.
          </h1>
          <p className="text-xl text-gray-400 mt-8 max-w-2xl mx-auto">
            Available for freelance projects and collaborations.
            <br />
            Let&apos;s build something extraordinary together.
          </p>
        </section>

        <section className="max-w-md mx-auto w-full animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
          <div className="p-8 border border-accent/20 rounded-2xl bg-black/40 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute inset-0 bg-accent/5 transition-opacity duration-300 group-hover:bg-accent/10" />

            <div className="relative z-10 space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Email</label>
                <a href="mailto:hello@example.com" className="text-2xl font-bold text-white hover:text-highlight transition-colors">
                  ziyad1aku@gmail.com
                </a>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">GitHub</label>
                <a href="https://github.com/example" target="_blank" rel="noopener noreferrer" className="text-2xl font-bold text-white hover:text-highlight transition-colors">
                  github.com/example
                </a>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Social</label>
                <div className="flex gap-4 text-xl font-bold text-white">
                  <a href="#" className="hover:text-highlight transition-colors">Twitter</a>
                  <a href="#" className="hover:text-highlight transition-colors">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
