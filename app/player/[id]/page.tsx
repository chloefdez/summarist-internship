type PlayerPageProps = {
  params: { id: string };
};

export default function PlayerPage({ params }: PlayerPageProps) {
  return (
    <main className="min-h-screen">
      <h1>Player page for ID: {params.id}</h1>
    </main>
  );
}