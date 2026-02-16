import { ProjectStatus } from '@/types';
import clsx from 'clsx';

export default function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const statusConfig = {
    'Completed': {
      classes: 'bg-accent/10 text-accent border-accent/20',
      dot: null
    },
    'In Progress': {
      classes: 'bg-highlight/10 text-highlight border-highlight/20',
      dot: <span className="inline-block w-1.5 h-1.5 rounded-full bg-highlight mr-2 animate-pulse shadow-[0_0_8px_rgba(191,255,0,0.8)]" />
    },
    'Draft': {
      classes: 'bg-white/5 text-gray-400 border-white/10',
      dot: null
    },
    'On Hold': {
      classes: 'bg-orange-500/10 text-orange-400 border-orange-500/20 opacity-70',
      dot: null
    }
  };

  const config = statusConfig[status] || statusConfig['Draft'];

  return (
    <span className={clsx(
      "inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border backdrop-blur-md",
      config.classes
    )}>
      {config.dot}
      {status}
    </span>
  );
}
