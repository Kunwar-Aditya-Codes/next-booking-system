import Image from 'next/image';

const RestaurantCard = () => {
  return (
    <div className='p-3 shadow-md border-t-2 border-slate-900 rounded-md shadow-slate-300 w-fit  '>
      <div>
        <Image
          src='https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60'
          width={300}
          height={400}
          alt='Restaurant'
          className='rounded-md'
        />
      </div>
      <div className='space-y-3 mt-2'>
        <h3 className='text-xl font-bold'>Restaurant Name</h3>
        <p className='text-sm text-gray-500'>Restaurant Description</p>
      </div>
    </div>
  );
};
export default RestaurantCard;
