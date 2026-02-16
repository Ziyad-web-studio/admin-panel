export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Project Detail: {slug}</h1>
    </main>
  );
}
