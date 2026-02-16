'use client';

import { useState, useEffect } from 'react';
import { Project, ProjectStatus } from '@/types';
import { Plus, Trash2, Edit, Upload, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // Load Projects
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

  const handleSaveProjects = async (projectsToSave: Project[]) => {
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

  const handlePublishProjects = async () => {
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
      status: 'Draft',
      createdAt: new Date().toISOString()
    };
    setEditingProject(newProject);
  };

  const handleDeleteProject = (id: string) => {
    if (confirm('Delete this project?')) {
      const updatedProjects = projects.filter(p => p.id !== id);
      handleSaveProjects(updatedProjects);
    }
  };

  const handleSaveEdit = () => {
    if (editingProject) {
      const exists = projects.some(p => p.id === editingProject.id);
      const updatedProjects = exists
        ? projects.map(p => p.id === editingProject.id ? editingProject : p)
        : [...projects, editingProject];
      handleSaveProjects(updatedProjects);
    }
  };

  if (loading) return <div className="flex h-screen items-center justify-center text-white bg-background font-mono">LOADING_SYSTEM...</div>;

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-white flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 flex flex-col fixed h-full bg-black/20 backdrop-blur-xl">
        <h1 className="text-xl font-black tracking-tighter text-white mb-12">
          ADMIN<span className="text-accent">PANEL</span>.
        </h1>

        <nav className="space-y-2">
            <div
              className="w-full text-left px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest transition-all bg-accent text-white shadow-[0_0_20px_rgba(138,43,226,0.2)]"
            >
              Projects
            </div>
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <p className="text-xs text-gray-600 font-mono">v2.0.0 Stable</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center">
              <h2 className="text-3xl font-bold text-white">Project Management</h2>
              <div className="flex gap-4">
                <button
                  onClick={handleAddProject}
                  className="flex items-center gap-2 bg-white/5 border border-white/10 px-5 py-2.5 rounded-lg hover:bg-white/10 hover:border-white/20 transition-all font-bold uppercase tracking-widest text-xs text-white"
                >
                  <Plus size={14} /> New Project
                </button>
                <button
                  onClick={handlePublishProjects}
                  className="flex items-center gap-2 bg-highlight text-black px-5 py-2.5 rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(191,255,0,0.4)] transition-all font-bold uppercase tracking-widest text-xs"
                >
                  <Upload size={14} /> Publish All
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map(project => (
                <div key={project.id} className="bg-card border border-white/5 rounded-2xl p-6 relative group hover:border-accent/30 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-2 py-1 text-[9px] font-mono uppercase tracking-widest rounded border ${project.status === 'Completed' ? 'bg-accent/10 text-accent border-accent/20' : 'bg-white/5 text-gray-400 border-white/10'}`}>
                      {project.status || 'Draft'}
                    </span>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingProject(project)} className="p-1.5 hover:text-accent transition-colors"><Edit size={16} /></button>
                      <button onClick={() => handleDeleteProject(project.id)} className="p-1.5 hover:text-red-500 transition-colors"><Trash2 size={16} /></button>
                    </div>
                  </div>

                  <h3 className="font-bold text-lg text-white mb-1 truncate">{project.title}</h3>
                  <p className="text-xs text-gray-500 font-mono mb-4">{new Date(project.createdAt || Date.now()).toLocaleDateString()}</p>

                  <div className="aspect-video bg-black/40 rounded-lg overflow-hidden border border-white/5 mb-4 relative">
                    {project.thumbnail ? (
                      <img src={project.thumbnail} className="w-full h-full object-cover opacity-60" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-700 text-[10px] uppercase">No Preview</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
      </main>

      {/* Edit Modal */}
      {editingProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-[#0A0A0A] border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
            <div className="flex justify-between items-center p-6 border-b border-white/5 sticky top-0 bg-[#0A0A0A] z-10">
              <h2 className="text-xl font-bold text-white">
                {projects.some(p => p.id === editingProject.id) ? 'Edit Project' : 'New Project'}
              </h2>
              <button onClick={() => setEditingProject(null)} className="text-gray-500 hover:text-white"><X size={20} /></button>
            </div>

            <div className="p-8 space-y-6">
              <div className="grid grid-cols-2 gap-6">
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Title</label>
                    <input
                      type="text"
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm"
                      value={editingProject.title}
                      onChange={e => setEditingProject({...editingProject, title: e.target.value})}
                    />
                 </div>
                 <div>
                    <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Status</label>
                    <select
                      className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm appearance-none"
                      value={editingProject.status}
                      onChange={e => setEditingProject({...editingProject, status: e.target.value as ProjectStatus})}
                    >
                      <option value="Draft">Draft</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="On Hold">On Hold</option>
                    </select>
                 </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Description</label>
                <textarea
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none h-32 text-sm resize-none"
                  value={editingProject.description}
                  onChange={e => setEditingProject({...editingProject, description: e.target.value})}
                />
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Thumbnail URL</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm"
                  value={editingProject.thumbnail}
                  onChange={e => setEditingProject({...editingProject, thumbnail: e.target.value})}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Demo Link</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm"
                    value={editingProject.demoLink}
                    onChange={e => setEditingProject({...editingProject, demoLink: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Repo Link</label>
                  <input
                    type="text"
                    className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm"
                    value={editingProject.repoLink}
                    onChange={e => setEditingProject({...editingProject, repoLink: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-bold">Tech Stack</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded p-3 text-white focus:border-accent outline-none text-sm"
                  value={editingProject.techStack.join(', ')}
                  onChange={e => setEditingProject({...editingProject, techStack: e.target.value.split(',').map(s => s.trim())})}
                  placeholder="React, Next.js..."
                />
              </div>

              <div className="flex items-center gap-3 p-4 bg-white/5 rounded border border-white/10">
                <input
                  type="checkbox"
                  id="isPublished"
                  checked={editingProject.isPublished}
                  onChange={e => setEditingProject({...editingProject, isPublished: e.target.checked})}
                  className="w-4 h-4 accent-accent"
                />
                <label htmlFor="isPublished" className="text-white select-none text-sm font-medium">Publish to Live Site</label>
              </div>
            </div>

            <div className="p-6 border-t border-white/5 bg-black/40 flex justify-end gap-3 sticky bottom-0">
               <button onClick={() => setEditingProject(null)} className="px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest text-gray-400 hover:text-white">Cancel</button>
               <button onClick={handleSaveEdit} className="px-8 py-2.5 rounded-lg text-sm font-bold uppercase tracking-widest bg-accent text-white hover:bg-accent/80 shadow-lg shadow-accent/20">Save Project</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
