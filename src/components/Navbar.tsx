"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FolderKanban, Mail } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: "Home",
    },
    {
      path: "/projects",
      icon: FolderKanban,
      label: "Projects",
    },
    {
      path: "/contact",
      icon: Mail,
      label: "Contact",
    },
  ];

  return (
    <nav className="fixed bottom-32 left-1/2 z-50 -translate-x-1/2">
      <div className="flex items-center gap-8 rounded-full border border-border bg-surface/80 p-8 shadow-1 backdrop-blur-md">
        {navItems.map((item) => {
          const active = isActive(item.path);
          const Icon = item.icon;

          return (
            <Link
              key={item.path}
              href={item.path}
              aria-label={item.label}
              className={`flex h-48 w-48 items-center justify-center rounded-full transition-colors duration-200 ${
                active
                  ? "bg-background text-highlight"
                  : "bg-transparent text-secondary hover:text-primary"
              }`}
            >
              <Icon size={24} strokeWidth={2} />
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
