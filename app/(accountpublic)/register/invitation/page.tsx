type PageProps = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function InvitationPage({ searchParams }: PageProps) {
  return (
    <div>
      INVITATION: ID:{searchParams?.uid} - hash {searchParams?.hash}
    </div>
  );
}
