export default function FaqCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return <div>FAQ CATEGORY: {params?.category}</div>;
}
