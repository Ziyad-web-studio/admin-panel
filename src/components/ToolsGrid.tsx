import { Tool } from '@/types';
import { Code, Cloud, Server, Layout, PenTool, Database, Cpu, Globe, Terminal, Box, Sparkles, MessageSquare, Zap } from 'lucide-react';

const tools: (Tool & { iconComp: any })[] = [
  { name: 'VSCode', description: 'Primary Code Editor', category: 'Editor', iconComp: Code },
  { name: 'Canva', description: 'Design & Assets', category: 'Design', iconComp: PenTool },
  { name: 'GitHub', description: 'Version Control', category: 'Cloud', iconComp: Terminal },
  { name: 'Cloudflare', description: 'DNS & Deployment', category: 'Cloud', iconComp: Globe },
  { name: 'Vercel', description: 'Hosting & CI/CD', category: 'Cloud', iconComp: Cloud },
  { name: 'SPCK Editor', description: 'Mobile Coding', category: 'Editor', iconComp: Code },
  { name: 'Pinterest', description: 'Inspiration', category: 'Design', iconComp: Layout },
  { name: 'Google Jules', description: 'AI Assistant', category: 'AI', iconComp: Sparkles },
  { name: 'Gemini', description: 'Research & Logic', category: 'AI', iconComp: Cpu },
  { name: 'ChatGPT', description: 'Pair Programming', category: 'AI', iconComp: MessageSquare },
  { name: 'Grok', description: 'Real-time Info', category: 'AI', iconComp: Zap },
  { name: 'Google Stitch', description: 'Prototyping', category: 'Design', iconComp: Box },
];

export default function ToolsGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {tools.map((tool) => (
        <div
          key={tool.name}
          className="group p-4 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 hover:border-accent/20 transition-all duration-300 flex flex-col items-center text-center gap-3 backdrop-blur-sm hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="p-3 bg-black/40 rounded-full text-accent group-hover:text-highlight transition-colors duration-300 shadow-inner">
            <tool.iconComp size={20} />
          </div>
          <div>
            <h4 className="font-semibold text-foreground text-sm mb-1">{tool.name}</h4>
            <p className="text-muted-foreground text-[10px] uppercase tracking-wide opacity-60 group-hover:opacity-100 transition-opacity">{tool.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
