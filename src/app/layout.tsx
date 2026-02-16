import "./globals.css";

export const metadata = {
  title: "Strategic Tech Founder Portfolio",
  description: "A portfolio for a strategic tech founder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
