import React from 'react';

function Login() {
  return (
    <div>
      <div>
        <h1>Login</h1>
        <form action='submit'>
          <div>
            <input type='email' />
            <label htmlFor=''>Your email</label>
          </div>
          <div>
            <input type='email' />
            <label htmlFor=''>Your email</label>
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
