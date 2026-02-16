import { TimelineItem } from '@/types';

const timelineData: TimelineItem[] = [
  { year: '2020', title: 'Hello World', description: 'Wrote my first line of Python code. Intrigued by the logic and creativity of programming.' },
  { year: '2021', title: 'Web Development', description: 'Dived into HTML, CSS, and JavaScript. Built my first static websites.' },
  { year: '2022', title: 'React & Ecosystem', description: 'Discovered React and the component-based architecture. Started building interactive SPAs.' },
  { year: '2023', title: 'Full Stack', description: 'Explored Node.js, databases, and backend logic. Built my first full-stack application.' },
  { year: '2024', title: 'Refining the Craft', description: 'Focusing on performance, accessibility, and clean design. Mastering Next.js and TypeScript.' },
];

export default function Timeline() {
  return (
    <div className="relative pl-6 space-y-12 border-l border-border/50 ml-4">
      {timelineData.map((item, index) => (
        <div key={index} className="relative animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ animationDelay: `${index * 100}ms` }}>
          <div className="absolute -left-[30px] top-1.5 w-3 h-3 rounded-full bg-accent border-4 border-background shadow-[0_0_10px_rgba(138,43,226,0.5)]" />

          <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 mb-2">
            <span className="text-highlight font-mono text-sm font-bold tracking-wider opacity-80">{item.year}</span>
            <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-xl text-sm">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}
