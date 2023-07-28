import React from 'react'

const Login = () => {


  return (
    <div className='login'>
      <div className='login-box'>
        <form>
          <h1 className="h3 mb-5 fw-bold">Please sign in</h1>

          <div className="form-floating">
            <input type="email" className="form-control email-input" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control password-input" id="floatingPassword" placeholder="Password"/>
            <button className="goto" type="submit"><i className="bi bi-arrow-right-circle"></i></button>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-black" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login