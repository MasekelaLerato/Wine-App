import React from 'react';

function Login() {
  return (
    <div>
      <div className='bg-slate-800 border-slate-400 rounded-md p-8 shadow-lg bacdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className=' text-4xl tect-whitefont-bold text-centre mb-6'>Login</h1>
        <form action=''>
          <div className='relative my-4'>
            <input type='email' className='block w-72 py-2.3 px-0 text-sm text-white  border-0 border-b2' />
            <label htmlFor=''>Your email</label>
          </div>
          <div>
            <input type='email' className='' />
            <label htmlFor=''>Your Password</label>
          </div>
          <div>
            <input type='checkbox' name='' id='' />
            <label htmlFor='Remember Me'></label>
          </div>
          <span>Forgot Password?</span>
          <button type='Submit'>Login</button>
         
        </form>
      </div>
    </div>
  );
}

export default Login;
