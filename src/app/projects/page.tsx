import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects';

export const revalidate = 60; // Revalidate every minute

export default async function ProjectsPage() {
  const allProjects = getProjects();
  const publishedProjects = allProjects.filter(p => p.isPublished);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground">
            Projects
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            A selection of my recent work, experiments, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedProjects.length > 0 ? (
            publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-24 text-muted-foreground/60 border border-dashed border-border rounded-3xl bg-secondary/30">
              <p className="text-xl font-medium">No projects published yet.</p>
              <p className="text-sm mt-2">Check back soon for updates.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
