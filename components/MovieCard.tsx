import Image from 'next/image';

const MovieCard = () => {
  return (
    <div className='p-3 border-t-indigo-800 border-t-4  shadow-xl border-2 border-slate-800 rounded-md w-fit h-fit'>
      <div className=''>
        <Image
          src='https://images.unsplash.com/photo-1613276017067-ef618366152a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YW50bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          width={250}
          height={400}
          alt='Restaurant'
          priority
          className='rounded-md w-auto'
        />
      </div>
      <div className='space-y-3 mt-2'>
        <h3 className='text-xl font-bold'>Movie Name</h3>
        <p className='text-sm text-slate-400'>Movie Rating</p>
      </div>
    </div>
  );
};
export default MovieCard;
