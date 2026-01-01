type BookPageProps = {
  params: { id: string };
};

export default function BookPage({ params }: BookPageProps) {
  return (
    <main className="min-h-screen">
      <h1>Book page for ID: {params.id}</h1>
    </main>
  );
}