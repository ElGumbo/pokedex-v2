import "../index.css";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import PokeGrid from "../components/pokeGrid";

function Pokedex() {
  return (
    <>
      <Header />
      <main className='max-w-7xl mx-auto px-6 py-14'>
        <h1 className='text-5xl font-extrabold mb-8'>Pokédex</h1>
        <SearchBar />
        <PokeGrid />
      </main>
    </>
  );
}

export default Pokedex;
