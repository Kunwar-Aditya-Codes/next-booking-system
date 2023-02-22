const ModalInput = () => {
  return (
    <>
      <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
        <input
          type='text'
          placeholder='First Name'
          className='border-2 border-slate-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
        />

        <input
          type='text'
          placeholder='Last Name'
          className='border-2 border-slate-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
        />
      </div>
      <input
        type='email'
        placeholder='Email'
        className='border-2 border-slate-800 w-full bg-transparent rounded-md p-2 my-2'
      />

      <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
        <input
          type='text'
          placeholder='Phone'
          className='border-2 border-slate-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
        />

        <input
          type='text'
          placeholder='City'
          className='border-2 border-slate-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
        />
      </div>

      <input
        type='password'
        placeholder='Password'
        className='border-2 border-slate-800 w-full bg-transparent rounded-md p-2 my-2'
      />
    </>
  );
};
export default ModalInput;
