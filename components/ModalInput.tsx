interface Props {
  isSignIn: Boolean;
  inputs: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    city: string;
    password: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ModalInput = ({ isSignIn, inputs, handleChange }: Props) => {
  return (
    <>
      {!isSignIn && (
        <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
          <input
            type='text'
            placeholder='First Name'
            name='firstName'
            value={inputs.firstName}
            onChange={handleChange}
            className='border-2 border-slate-800 w-full md:flex-[0.49] outline-none focus:border-indigo-800 bg-transparent rounded-md p-2 my-2'
          />

          <input
            type='text'
            placeholder='Last Name'
            name='lastName'
            value={inputs.lastName}
            onChange={handleChange}
            className='border-2 border-slate-800 outline-none focus:border-indigo-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />
        </div>
      )}
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={inputs.email}
        onChange={handleChange}
        className='border-2 border-slate-800 outline-none focus:border-indigo-800 w-full bg-transparent rounded-md p-2 my-2'
      />

      {!isSignIn && (
        <div className='flex flex-col md:flex-row w-full  items-center justify-center md:justify-between'>
          <input
            type='text'
            placeholder='Phone'
            name='phone'
            value={inputs.phone}
            onChange={handleChange}
            className='border-2 border-slate-800 outline-none focus:border-indigo-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />

          <input
            type='text'
            placeholder='City'
            name='city'
            value={inputs.city}
            onChange={handleChange}
            className='border-2 border-slate-800 outline-none focus:border-indigo-800 w-full md:flex-[0.49] bg-transparent rounded-md p-2 my-2'
          />
        </div>
      )}

      <input
        type='password'
        placeholder='Password'
        name='password'
        value={inputs.password}
        onChange={handleChange}
        className='border-2 border-slate-800 outline-none focus:border-indigo-800 w-full bg-transparent rounded-md p-2 my-2'
      />
    </>
  );
};
export default ModalInput;
