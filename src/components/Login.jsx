import React from 'react';

function Login() {
  return (
    <div>
     
     <h1 className=' text-4xl text-black font-bold text-centre mb-8'>My Wines App</h1>
      
      <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
      
      <h2 className=' text-4xl text-black font-bold text-centre mb-6'>Login</h2>
        
        <form action=''>
          
          <div className='relative my-4'>
            <input type='email' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-black-600 peer' />
            <label htmlFor=''className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your email</label>
          </div>
          
          <div className='relative my-4'>
            <input type='password' className='block w-72 py-2.3 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:text-white focus:border-black-600 peer' />
            <label htmlFor='' className='absolute text-sm text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 orgin-[0] peer-focus:left-0 peer-focus:text-red-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Your Password</label>
          </div>
          
          <div className='flex justify-between items-center'>
            {/* <div className='flex gap-2 items-center'>
            <input type='checkbox' name='' id='' />
            <label htmlFor='Remember Me'>Remember Me</label>
            </div> */}
            {/* <span className='text-red-700'>Forgot Password?</span> */}
          </div>
         
          <button className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-black-800 hover:bg-red-600 hover:text-red py-2 transition-colors duration-300' type='Submit'>Login</button>
         
        </form>
      </div>
    </div>
  );
}

export default Login;
