import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-3xl mx-auto w-full space-y-20">

        <section className="text-center animate-in fade-in zoom-in duration-1000 space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Available for freelance projects and collaborations.
            <br />
            Let&apos;s build something extraordinary together.
          </p>
        </section>

        <section className="max-w-md mx-auto w-full animate-in fade-in slide-in-from-bottom-10 duration-700 delay-200">
          <div className="p-8 bg-card rounded-[2rem] shadow-float border border-border relative overflow-hidden group hover:scale-[1.02] transition-transform duration-500">

            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 space-y-8">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Email</label>
                <a href="mailto:ziyad1aku@gmail.com" className="text-xl font-medium text-foreground hover:text-primary transition-colors block">
                  ziyad1aku@gmail.com
                </a>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">GitHub</label>
                <a href="https://github.com/Ziyad-web-studio" target="_blank" rel="noopener noreferrer" className="text-xl font-medium text-foreground hover:text-primary transition-colors block">
                  Ziyad-web-studio
                </a>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-2">Social</label>
                <div className="flex gap-6 text-lg font-medium text-foreground">
                  <a href="#" className="hover:text-primary transition-colors">Twitter</a>
                  <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
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
