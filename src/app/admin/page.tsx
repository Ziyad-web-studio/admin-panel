'use client';

import { useState, useEffect } from 'react';
import { Project } from '@/types';
import { Plus, Trash2, Edit, Upload, ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects');
        if (res.ok) {
          const data = await res.json();
          setProjects(data);
        } else {
          router.push('/login');
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [router]);

  const handleSave = async (projectsToSave: Project[]) => {
    try {
      await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action: 'save', projects: projectsToSave }),
      });
      setProjects(projectsToSave);
      setEditingProject(null);
    } catch (error) {
      console.error('Failed to save projects:', error);
    }
  };

  const handlePublish = async () => {
    if (confirm('Are you sure you want to publish changes to GitHub? This will trigger a deployment.')) {
      try {
        setLoading(true);
        const res = await fetch('/api/projects', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ action: 'publish', projects }),
        });

        if (res.ok) {
           alert('Published successfully!');
        } else {
           alert('Failed to publish');
        }
      } catch (error) {
        console.error('Failed to publish:', error);
        alert('Failed to publish');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleAddProject = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: 'New Project',
      description: '',
      thumbnail: '',
      techStack: [],
      demoLink: '',
      repoLink: '',
      isPublished: false,
    };
    setEditingProject(newProject);
  };

  const handleEditProject = (project: Project) => {
    setEditingProject({ ...project });
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id);
      handleSave(updatedProjects);
    }
  };

  const handleSaveEdit = () => {
    if (editingProject) {
      const exists = projects.some(p => p.id === editingProject.id);
      const updatedProjects = exists
        ? projects.map(p => p.id === editingProject.id ? editingProject : p)
        : [...projects, editingProject];
      handleSave(updatedProjects);
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center text-white bg-primary-bg">Loading...</div>;

  return (
    <div className="min-h-screen bg-primary-bg p-8 text-white selection:bg-accent selection:text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <h1 className="text-4xl font-black tracking-tighter text-white">
            DASHBOARD<span className="text-accent">.</span>
          </h1>
          <div className="flex gap-4">
            <button
              onClick={handleAddProject}
              className="flex items-center gap-2 bg-white/5 border border-white/10 px-6 py-3 rounded hover:bg-white/10 hover:border-white/20 transition-all duration-300 font-bold uppercase tracking-widest text-sm"
            >
              <Plus size={16} /> Add Project
            </button>
            <button
              onClick={handlePublish}
              className="flex items-center gap-2 bg-accent text-white px-6 py-3 rounded hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(138,43,226,0.4)] transition-all duration-300 font-bold uppercase tracking-widest text-sm"
            >
              <Upload size={16} /> Publish Changes
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(project => (
            <div key={project.id} className="bg-white/5 border border-white/10 rounded-xl p-6 relative group overflow-hidden hover:border-accent/40 transition-colors duration-300">
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                <button onClick={() => handleEditProject(project)} className="p-2 bg-blue-500/20 text-blue-400 rounded hover:bg-blue-500/40 backdrop-blur-md">
                  <Edit size={16} />
                </button>
                <button onClick={() => handleDeleteProject(project.id)} className="p-2 bg-red-500/20 text-red-400 rounded hover:bg-red-500/40 backdrop-blur-md">
                  <Trash2 size={16} />
                </button>
              </div>

              <div className="mb-4 aspect-video bg-black/50 rounded-lg overflow-hidden border border-white/5">
                {project.thumbnail ? (
                  <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 text-xs uppercase tracking-widest">No Image</div>
                )}
              </div>

              <h3 className="font-bold text-lg mb-2 truncate">{project.title || 'Untitled Project'}</h3>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2 h-10">{project.description || 'No description'}</p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className={`px-2 py-1 text-[10px] font-mono uppercase tracking-widest rounded border ${project.isPublished ? 'bg-green-500/10 text-green-400 border-green-500/20' : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'}`}>
                  {project.isPublished ? 'Published' : 'Draft'}
                </span>
                <div className="flex gap-2">
                   {project.demoLink && <ExternalLink size={14} className="text-gray-500" />}
                </div>
              </div>
            </div>
          ))}

          {projects.length === 0 && (
            <div className="col-span-full py-20 text-center border-2 border-dashed border-white/10 rounded-xl text-gray-500">
              <p>No projects found. Add one to get started.</p>
            </div>
          )}
        </div>
      </div>

      {editingProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
          <div className="bg-[#0A0A0A] border border-accent/20 rounded-xl w-full max-w-2xl p-8 max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <h2 className="text-2xl font-bold mb-8 text-white border-b border-white/10 pb-4">
              {projects.some(p => p.id === editingProject.id) ? 'Edit Project' : 'New Project'}
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Title</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none transition-colors"
                  value={editingProject.title}
                  onChange={e => setEditingProject({...editingProject, title: e.target.value})}
                  placeholder="Project Title"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Description</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none h-32 transition-colors resize-none"
                  value={editingProject.description}
                  onChange={e => setEditingProject({...editingProject, description: e.target.value})}
                  placeholder="Project Description"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Thumbnail URL</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none transition-colors"
                  value={editingProject.thumbnail}
                  onChange={e => setEditingProject({...editingProject, thumbnail: e.target.value})}
                  placeholder="https://..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Demo Link</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none transition-colors"
                    value={editingProject.demoLink}
                    onChange={e => setEditingProject({...editingProject, demoLink: e.target.value})}
                    placeholder="https://..."
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Repo Link</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none transition-colors"
                    value={editingProject.repoLink}
                    onChange={e => setEditingProject({...editingProject, repoLink: e.target.value})}
                    placeholder="https://..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent focus:bg-accent/5 outline-none transition-colors"
                  value={editingProject.techStack.join(', ')}
                  onChange={e => setEditingProject({...editingProject, techStack: e.target.value.split(',').map(s => s.trim())})}
                  placeholder="React, Next.js, Tailwind..."
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={editingProject.isPublished}
                  onChange={e => setEditingProject({...editingProject, isPublished: e.target.checked})}
                  className="w-5 h-5 accent-accent cursor-pointer"
                />
                <label htmlFor="isPublished" className="text-white cursor-pointer select-none text-sm font-medium">Publish immediately</label>
              </div>
            </div>

            <div className="flex justify-end gap-4 mt-8 pt-4 border-t border-white/10">
              <button
                onClick={() => setEditingProject(null)}
                className="px-6 py-3 rounded text-gray-400 hover:text-white transition-colors font-bold uppercase tracking-widest text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                className="px-8 py-3 bg-accent text-white rounded font-bold hover:bg-accent/80 transition-colors uppercase tracking-widest text-sm shadow-[0_0_20px_rgba(138,43,226,0.3)]"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
