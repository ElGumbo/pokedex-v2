const Header = () => {
  return (
    <>
      <header class='bg-[#ececec] border-b-4 border-red-500'>
        <nav class='max-w-7xl mx-auto px-6'>
          <div class='flex gap-10 h-24 items-center'>
            <a
              href='index.html'
              class='text-red-500 font-semibold text-2xl border-b-4 border-red-500 pb-8'
            >
              Homepage
            </a>
            <a
              href='pokedex.html'
              class='text-slate-500 font-semibold text-2xl pb-8 hover:text-red-500 transition'
            >
              Pokedex
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
