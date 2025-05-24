import { useGetAllPokemonQuery } from "../store/global.slice";

const PokemonDashboard = () => {
  const { data, error, isLoading } = useGetAllPokemonQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pokemon</p>;

  return (
    <ul>
      {data && (
        <section>
          {data.map((d) => (
            <li key={d.name}>
              {d.url}: {d.name}
            </li>
          ))}
        </section>
      )}
    </ul>
  );
};

export default PokemonDashboard;
