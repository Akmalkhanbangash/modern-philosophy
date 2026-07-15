type Props = {
  params: {
    slug: string;
  };
};

export default function ArticlePage({ params }: Props) {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-5xl font-bold">{params.slug}</h1>
    </main>
  );
}