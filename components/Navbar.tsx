'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className='px-6 py-3 flex flex-col items-center md:flex-row border-b border-b-slate-800 space-y-5 md:space-y-0'>
      <h1 className='text-2xl font-thin flex-grow'>
        <Link href='/'>Booking Buddy</Link>
      </h1>
      <div className='space-x-6 p-2 w-full max-w-3xl flex items-center justify-center md:justify-end'>
        <button className='bg-fuchsia-500 text-slate-900 font-medium py-2 rounded-2xl px-4'>
          Login
        </button>
        <button className='border-2 border-fuchsia-500 px-4 py-[0.25rem] rounded-2xl'>
          Sign Up
        </button>
      </div>
    </nav>
  );
}
