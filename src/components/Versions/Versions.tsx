import { useFetch } from "../../utils/useFetch";

type Version = {
  id: number;
  name: string;
};

const Versions = () => {
  const { data, loading, error } = useFetch<Version[]>(
    "/jsons/windows/versions.json",
  );

  if (loading) return <div>Versions fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>Versions</h1>
      <ul>
        {data?.map((version) => (
          <li key={version.id}>{version.name}</li>
        ))}
      </ul>
    </div>
  );
};

export { Versions };
