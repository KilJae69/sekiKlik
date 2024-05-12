export default function ArticleListPage({
  params,
}: {
  params: { category: string };
}) {
  return <div>Article List: {params?.category}</div>;
}
