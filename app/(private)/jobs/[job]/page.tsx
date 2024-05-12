export default function SingleJobPage({ params }: { params: { job: string } }) {
  return <div>SINGLE JOB: {params?.job}</div>;
}
