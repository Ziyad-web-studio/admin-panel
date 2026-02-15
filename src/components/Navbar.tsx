'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={clsx(
      "fixed w-full z-50 top-0 left-0 transition-all duration-300 px-4",
      scrolled ? "py-4" : "py-6"
    )}>
      <div className={clsx(
        "max-w-4xl mx-auto px-6 h-14 flex items-center justify-between transition-all duration-300 rounded-full",
        scrolled ? "glass-panel shadow-soft" : "bg-transparent"
      )}>
        <div className="flex-shrink-0">
          <Link href="/" className="text-lg font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity">
            Portfolio
          </Link>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center space-x-1">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/projects">Projects</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300",
        isActive
          ? "bg-foreground text-background shadow-md"
          : "text-muted-foreground hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
      )}
    >
      {children}
    </Link>
  );
}
