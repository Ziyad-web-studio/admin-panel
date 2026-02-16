export type ProjectStatus = 'Completed' | 'Draft' | 'In Progress' | 'On Hold';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoLink: string;
  repoLink: string;
  isPublished: boolean;
  status: ProjectStatus;
  createdAt: string; // ISO Date String
}

export interface Tool {
  name: string;
  description: string;
  icon?: string; // Optional icon path or component name
  category: 'Editor' | 'Design' | 'Cloud' | 'AI' | 'Other';
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Song {
  title: string;
  artist: string;
  meaning: string;
  previewUrl: string; // Spotify or YouTube embed URL
}
