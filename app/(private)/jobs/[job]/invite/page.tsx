export default function SingleJobInvitePage({
  params,
}: {
  params: { job: string };
}) {
  return <div>INVITE PAGE FOR JOB: {params.job}</div>;
}
