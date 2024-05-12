export default function SingleArticlePage({
  params,
}: {
  params: { id: string };
}) {
  return <div>Article page: {params?.id}</div>;
}
