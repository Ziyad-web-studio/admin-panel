export interface Project {
  id: string;
  title: string;
  description: string;
  status: "active" | "completed" | "draft";
  stack: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Enterprise Architecture System",
    description: "A comprehensive digital infrastructure platform designed for scalable enterprise operations and high-concurrency data processing.",
    status: "active",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    id: "2",
    title: "Financial Analytics Dashboard",
    description: "Real-time financial data visualization tool with predictive modeling capabilities and automated reporting pipelines.",
    status: "completed",
    stack: ["Next.js", "D3.js", "Python", "AWS"],
  },
  {
    id: "3",
    title: "Internal Tooling Framework",
    description: "Modular component library and developer experience toolkit for standardizing internal product development workflows.",
    status: "draft",
    stack: ["Vue.js", "Tailwind CSS", "Storybook"],
  },
];
