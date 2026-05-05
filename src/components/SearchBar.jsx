const SearchBar = () => {
  return (
    <>
      <section className='flex flex-col md:flex-row gap-4 mb-12'>
        <input
          id='searchInput'
          type='text'
          placeholder='Search by name or ID...'
          className='flex-1 h-16 rounded-2xl border border-slate-300 px-6 text-2xl outline-none focus:ring-2 focus:ring-red-400 bg-transparent'
        />
        <button
          id='searchBtn'
          className='bg-red-500 hover:bg-red-600 text-white font-bold text-2xl px-10 h-16 rounded-2xl transition'
        >
          Search
        </button>
      </section>
    </>
  );
};

export default SearchBar;
