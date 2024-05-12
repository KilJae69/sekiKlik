type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};
export default function SubscriptionPurchasePage({ searchParams }: PageProps) {
  return <div>SUBSCRIPTION CONFIRM/PURCHASE ID: {searchParams?.id}</div>;
}
