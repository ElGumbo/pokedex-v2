const PokeCard = ({ pokemon }) => {
  const { id, idString, name, sprite, types, type1Color, type2Color, stats } =
    pokemon;

  return (
    <article className='bg-white rounded-3xl shadow-lg overflow-hidden'>
      <div className='bg-slate-100 h-60 flex items-center justify-center'>
        <img src={sprite} alt={name} className='w-36 h-36 object-contain' />
      </div>

      <div className='p-6'>
        <div className='flex items-center justify-between mb-4'>
          <h2 className='text-2xl font-extrabold capitalize'>{name}</h2>
          <span className='text-slate-400 text-2xl font-semibold'>
            {idString}
          </span>
        </div>

        <div className='flex gap-3 mb-5'>
          <span
            style={{ backgroundColor: type1Color }}
            className='text-white text-sm font-bold px-4 py-2 rounded-full'
          >
            {types[0]}
          </span>
          {types[1] && (
            <span
              style={{ backgroundColor: type2Color }}
              className='text-white text-sm font-bold px-4 py-2 rounded-full'
            >
              {types[1]}
            </span>
          )}
        </div>

        <div className='grid grid-cols-2 gap-y-3 gap-x-5 text-xl mb-6'>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Hp:</span>
            <span className='font-bold'>{stats.hp}</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Speed:</span>
            <span className='font-bold'>{stats.speed}</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Attack:</span>
            <span className='font-bold'>{stats.attack}</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Defense:</span>
            <span className='font-bold'>{stats.defense}</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Sp. Atk:</span>
            <span className='font-bold'>{stats.specialAttack}</span>
          </p>
          <p className='flex justify-between'>
            <span className='text-slate-500'>Sp. Def:</span>
            <span className='font-bold'>{stats.specialDefense}</span>
          </p>
        </div>

        <button className='w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition-colors font-medium'>
          Catch'em!
        </button>
      </div>
    </article>
  );
};

export default PokeCard;
