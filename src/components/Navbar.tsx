"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";

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
      label: "Home",
    },
    {
      path: "/projects",
      label: "Projects",
    },
    {
      path: "/contact",
      label: "Contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/70 shadow-1 backdrop-blur-md">
      <Container className="flex h-64 items-center justify-between">
        <nav className="flex items-center gap-16">
          {navItems.map((item) => {
            const active = isActive(item.path);

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`rounded px-16 py-8 text-small font-medium transition-all duration-200 ${
                  active
                    ? "bg-accent/10 text-primary"
                    : "bg-transparent text-secondary hover:bg-surface hover:text-primary"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="text-h2 font-semibold text-primary">ZT</div>
      </Container>
    </header>
  );
}
