import FaqHeading from '@/components/faq/FaqHeading';

/* eslint-disable prettier/prettier */
export default function FaqCategoryPage({
  params,
}: {
  params: { category: string };
}) {
  return (
    <>
      <FaqHeading />
      FAQ CATEGORY: {params?.category}
    </>
  );
}

