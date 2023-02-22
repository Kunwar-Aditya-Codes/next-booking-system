'use client';

import Link from 'next/link';
import Modal from './Modal';

export default function Navbar() {
  return (
    <nav className='px-6 py-3 flex flex-col items-center md:flex-row border-b border-b-slate-700 space-y-5 md:space-y-0'>
      <h1 className='text-2xl font-thin flex-grow'>
        <Link href='/'>Booking Buddy</Link>
      </h1>
      <div className='space-x-6 p-2 w-full max-w-3xl flex items-center justify-center md:justify-end'>
        <Modal isSignIn={true} />
        <Modal isSignIn={false} />
      </div>
    </nav>
  );
}
