'use client';

import { AuthenticationContext } from '@/context/AuthContext';
import useAuth from '@/hooks/useAuth';
import Link from 'next/link';
import { useContext } from 'react';
import Modal from './Modal';
import toast, { Toaster } from 'react-hot-toast';

export default function Navbar() {
  const { data, loading } = useContext(AuthenticationContext);
  const { signOut } = useAuth();

  return (
    <nav className='px-6 py-3 flex flex-col items-center md:flex-row border-b border-b-slate-800 space-y-5 md:space-y-0'>
      <Toaster />
      <h1 className='text-2xl font-thin flex-grow'>
        <Link href='/'>Booking Buddy</Link>
      </h1>

      <div className='space-x-6 p-2 w-full max-w-3xl flex items-center justify-center md:justify-end'>
        {loading ? null : (
          <>
            {data ? (
              <>
                <h1 className='border-2 border-indigo-800 px-4 py-[0.25rem] rounded-2xl'>
                  {data.firstName} {data.lastName}
                </h1>

                <button
                  onClick={signOut}
                  className='bg-indigo-800 px-4 py-[0.25rem] rounded-2xl'
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Modal isSignIn={true} />
                <Modal isSignIn={false} />
              </>
            )}
          </>
        )}
      </div>
    </nav>
  );
}
