'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Hero = () => {
  const [location, setLocation] = useState<string>('');

  const router = useRouter();
  return (
    <div className='border-b border-b-slate-800'>
      <section className='h-[15rem] flex items-center justify-center px-2 '>
        <input
          type='text'
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder='Search for a movie'
          className=' px-2 py-2 rounded-l-2xl bg-transparent border-2 border-slate-800 w-full max-w-3xl outline-none'
        />
        <MagnifyingGlassIcon
          onClick={() => router.push(`/search`)}
          className='h-[2.7rem] w-[2.7rem] p-[0.65rem] rounded-r-2xl cursor-pointer bg-indigo-800'
        />
      </section>
    </div>
  );
};
export default Hero;
