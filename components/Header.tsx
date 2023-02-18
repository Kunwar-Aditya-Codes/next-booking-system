import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <nav className='px-2 py-3 flex flex-col items-center md:flex-row space-y-5 md:space-y-0'>
        <h1 className='text-2xl font-thin flex-grow'>
          <Link href='/'>
            Booking Buddy</Link>
        </h1>
        <div className='space-x-6 p-2 w-full max-w-3xl flex items-center justify-center md:justify-end'>
          <button className='bg-rose-400 text-white py-2 rounded-2xl px-4'>
            Login
          </button>
          <button className='border-2 border-rose-400 px-4 py-[0.25rem] rounded-2xl'>
            Sign Up
          </button>
        </div>
      </nav>

      <section className='h-[15rem] flex items-center justify-center px-2 bg-slate-900'>
        <input
          type='text'
          placeholder='Search for a hotel'
          className=' px-2 py-2 rounded-l-2xl bg-transparent border-2 text-white border-rose-400 w-full max-w-3xl outline-none'
        />
        <MagnifyingGlassIcon className='h-[2.7rem] w-[2.7rem] p-2 rounded-r-2xl bg-rose-400 text-white' />
      </section>
    </>
  );
}
