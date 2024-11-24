import Portfolio from "../components/Portfolio";

export default async function Profile({
  params,
}: {
  params: Promise<{ username: string }>;
}) {
  const { username } = await params;

  console.log(username);
  return (
    <div>
      <Portfolio username={username} />
    </div>
  );
}
