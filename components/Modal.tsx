'use client';

import { useState } from 'react';

const Modal = ({ isSignIn }: { isSignIn: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignIn ? signinContent : signupContent;
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className={`${renderContent(
          'bg-slate-800',
          'border-2 border-slate-800 '
        )} px-4 py-[0.25rem] rounded-2xl`}
      >
        {renderContent('Sign In', 'Sign Up')}
      </button>

      {open && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50'>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-slate-900 rounded-2xl space-y-6'>
            <div className='flex justify-end px-4 py-2'>
              <button onClick={() => setOpen(false)}>X</button>
            </div>
            <div className='flex justify-center '>
              <h1 className='text-2xl'>Login</h1>
            </div>
            <div className='flex justify-center'>
              <form className='flex flex-col'>
                <input
                  type='text'
                  placeholder='Username'
                  className='border-2 border-slate-800 bg-transparent rounded-md p-2 my-2'
                />
                <input
                  type='password'
                  placeholder='Password'
                  className='border-2 border-slate-800 bg-transparent rounded-md p-2 my-2'
                />

                <button className='bg-slate-800  rounded-md p-2 my-2'>
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Modal;
