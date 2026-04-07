import { useFetch } from "../../utils/useFetch";

type Version = {
  id: number;
  name: string;
  preceded: string[] | null;
  succeded: string[] | null;
  pcreleases: number[] | null;
  svreleases: number[] | null;
};

const Versions = () => {
  const { data, loading, error } = useFetch<Version[]>(
    "/jsons/windows/versions.json",
  );

  if (loading) return <div>Versions fetching...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <h1>versions</h1>
      <ul>
        {data?.map((version) => (
          <li key={version.id}>
            <h2>{version.name}</h2>
            <h3>preceded</h3>
            <ul>
              {version.preceded?.map((preceded, i) => (
                <li key={i}>{preceded}</li>
              ))}
            </ul>
            <h3>succeded</h3>
            <ul>
              {version.succeded?.map((succeded, i) => (
                <li key={i}>{succeded}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Versions };
