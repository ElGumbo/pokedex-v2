const Header = () => {
  const isHome =
    window.location.pathname === "/" ||
    window.location.pathname.includes("index");
  const isPokedex = window.location.pathname.includes("pokedex");

  return (
    <>
      <header className='bg-[#ececec] border-b-4 border-red-500'>
        <nav className='max-w-7xl mx-auto px-6'>
          <div className='flex gap-10 h-24 items-center'>
            <a
              href='/index.html'
              className={`font-semibold text-2xl pb-8 transition ${isHome ? "text-red-500 border-b-4 border-red-500" : "text-slate-500 hover:text-red-500"}`}
            >
              Homepage
            </a>
            <a
              href='/pokedex.html'
              className={`font-semibold text-2xl pb-8 transition ${isPokedex ? "text-red-500 border-b-4 border-red-500" : "text-slate-500 hover:text-red-500"}`}
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
