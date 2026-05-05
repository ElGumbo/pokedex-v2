import PokeCard from "./PokeCard";

const PokeGrid = () => {
  const placeholderPokemon = {
    id: 1,
    idString: "#001",
    name: "bulbasaur",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    types: ["grass", "poison"],
    type1Color: "#78C850",
    type2Color: "#A040A0",
    stats: {
      hp: 45,
      attack: 49,
      defense: 49,
      specialAttack: 65,
      specialDefense: 65,
      speed: 45,
    },
  };

  return (
    <>
      <section
        id='pokemonContainer'
        className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8'
      >
        <PokeCard pokemon={placeholderPokemon} />
      </section>
    </>
  );
};

export default PokeGrid;
