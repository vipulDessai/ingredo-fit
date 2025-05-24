import { useGetPokemonByNameQuery } from "../store/global.slice";

const PokemonDetails = () => {
  const { data, error, isLoading } = useGetPokemonByNameQuery("ivysaur");

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading pokemon</p>;

  return (
    <ul>
      {data && (
        <section>
          {data.url}: {data.name}
        </section>
      )}
    </ul>
  );
};

export default PokemonDetails;
