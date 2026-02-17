import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-desktop px-16 md:px-32 lg:px-48 ${className}`}>
      {children}
    </div>
  );
}
