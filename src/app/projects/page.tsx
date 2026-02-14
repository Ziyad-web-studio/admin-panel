import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProjectCard from '@/components/ProjectCard';
import { getProjects } from '@/lib/projects';

export const revalidate = 60; // Revalidate every minute

export default async function ProjectsPage() {
  const allProjects = getProjects();
  const publishedProjects = allProjects.filter(p => p.isPublished);

  return (
    <div className="flex flex-col min-h-screen bg-primary-bg selection:bg-accent selection:text-white">
      <Navbar />
      <main className="flex-grow pt-24 pb-12 px-4 max-w-7xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-white">
            PROJECTS
            <span className="text-highlight">.</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work, experiments, and contributions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publishedProjects.length > 0 ? (
            publishedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl">No projects published yet.</p>
              <p className="text-sm mt-2 text-gray-600">Check back soon for updates.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
