import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard'; // Will need to update this component too
import { getProjects } from '@/lib/projects';

export const revalidate = 60;

export default async function ProjectsPage() {
  const allProjects = getProjects();
  // Show all projects here, or filter? Usually "Draft" should be hidden unless admin, but requirement says "Drafts not publicly visible".
  const publishedProjects = allProjects.filter(p => p.isPublished);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-32 pb-20 px-6 max-w-7xl mx-auto w-full">
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 text-white">
            PROJECTS<span className="text-highlight">.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl text-lg leading-relaxed border-l-2 border-accent/50 pl-6">
            A curated selection of experiments, products, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedProjects.length > 0 ? (
            publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full py-32 text-center border border-dashed border-white/10 rounded-3xl bg-white/5">
              <p className="text-xl text-gray-500 font-mono">No published projects yet.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
