'use client';

import { useState } from 'react';
import ModalInput from './ModalInput';
import { XMarkIcon } from '@heroicons/react/24/outline';

const Modal = ({ isSignIn }: { isSignIn: boolean }) => {
  const [open, setOpen] = useState<boolean>(false);

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const renderContent = (signinContent: string, signupContent: string) => {
    return isSignIn ? signinContent : signupContent;
  };

  return (
    <div>
      <button
        onClick={() => {
          setOpen(true);
          document.body.style.overflow = 'hidden';
        }}
        className={`${renderContent(
          'bg-indigo-800',
          'border-2 border-indigo-800 '
        )} px-4 py-[0.25rem] rounded-2xl`}
      >
        {renderContent('Sign In', 'Sign Up')}
      </button>

      {open && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/50 z-50'>
          <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[18rem] md:w-[30rem] h-[40rem] bg-slate-900 rounded-2xl space-y-6'>
            <div className='flex justify-end px-4 py-3'>
              <button
                onClick={() => {
                  setOpen(false);
                  document.body.style.overflow = 'unset';
                }}
              >
                <XMarkIcon className='h-6 w-6 ' />
              </button>
            </div>
            <div className='flex justify-center'>
              <h1 className='text-2xl'>
                {renderContent('Sign In', 'Sign Up')}
              </h1>
            </div>
            <div className='flex justify-center '>
              <form className='flex flex-col w-full px-6'>
                <ModalInput
                  isSignIn={isSignIn}
                  inputs={inputs}
                  handleChange={handleChange}
                />
                <button className='bg-blue-900 shadow-lg rounded-md p-2 my-2'>
                  {renderContent('Login', 'Create Account')}
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
