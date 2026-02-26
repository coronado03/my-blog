import Article from '@/components/article/article';

export default function ArticlePage({ params }: { params: { slug: string } }) {
  return (
    <>
      <Article fileName={params.slug} />
    </>
  );
}
