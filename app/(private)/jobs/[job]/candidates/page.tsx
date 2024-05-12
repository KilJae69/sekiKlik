export default function SingleJobCandidatesPage({
  params,
}: {
  params: { job: string };
}) {
  return <div>CANDIDATES PAGE FOR JOB: {params.job}</div>;
}
