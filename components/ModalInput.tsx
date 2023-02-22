const ModalInput = ({ isSignIn }: { isSignIn: Boolean }) => {
  return (
    <>
      {!isSignIn && (
        <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
          <input
            type='text'
            placeholder='First Name'
            className='border-2 border-slate-700 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />

          <input
            type='text'
            placeholder='Last Name'
            className='border-2 border-slate-700 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />
        </div>
      )}
      <input
        type='email'
        placeholder='Email'
        className='border-2 border-slate-700 w-full bg-transparent rounded-md p-2 my-2'
      />

      {!isSignIn && (
        <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
          <input
            type='text'
            placeholder='Phone'
            className='border-2 border-slate-700 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />

          <input
            type='text'
            placeholder='City'
            className='border-2 border-slate-700 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />
        </div>
      )}

      <input
        type='password'
        placeholder='Password'
        className='border-2 border-slate-700 w-full bg-transparent rounded-md p-2 my-2'
      />
    </>
  );
};
export default ModalInput;
