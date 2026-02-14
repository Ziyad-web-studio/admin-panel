import clsx from 'clsx';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export default function Button({ className, href, variant = 'primary', children, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 font-bold uppercase tracking-widest";

  const variants = {
    primary: "border-transparent text-white bg-accent hover:bg-accent/80 hover:shadow-[0_0_20px_rgba(138,43,226,0.6)]",
    secondary: "border-transparent text-black bg-highlight hover:bg-white hover:shadow-[0_0_20px_rgba(191,255,0,0.6)]",
    outline: "border-accent text-accent bg-transparent hover:bg-accent hover:text-white hover:shadow-[0_0_20px_rgba(138,43,226,0.4)]"
  };

  if (href) {
    return (
      <Link href={href} className={clsx(baseStyles, variants[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
