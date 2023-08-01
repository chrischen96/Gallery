import React from 'react'
import { useState, useContext, useEffect } from 'react'
import LoginContext from '../../context.jsx'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { loginUser, setLoginUser } = useContext(LoginContext)
  const [user, setUser] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user);
    await axiosInstance
      .post(`api/token/`, {
        email: user.email,
        password: user.password,
      })
      .then(async (res) => {
        localStorage.setItem('access', res.data.access);
        localStorage.setItem('refresh', res.data.refresh);

      })
      .then(() => {
        axiosInstance
          .get(`users/profile/${user.email}/`, {
            headers: {
              Authorization: `JWT ${localStorage.getItem('access')}`,
            },
          })
          .then((res) => {
            setLoginUser(res.data);
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          }
          );
        navigate('/collection');
      })
      .catch((err) => {
        console.log(err);
        alert("Wrong email or password!");
      }
      );
  };


  const navigate = useNavigate()

  const showPhoto = (id) => {
    navigate(`${id}`)
  }


  return (
    <div className='login'>
      <div className='login-box'>
        <form className='mb-4'>
          <h1 className="h2 mb-5 fw-semibold">Sign in to Gallery</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control email-input"
              id="email"
              name="email"
              placeholder="name@example.com"
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control password-input"
              id="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <button
              className="goto"
              type="submit"
              onClick={handleSubmit}
            >
              <i className="bi bi-arrow-right-circle"></i>
            </button>
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-check text-start d-flex justify-content-center" style={{ marginTop: '66px' }}>
            <input className="form-check-input me-2" type="checkbox" value="remember-me" id="flexCheckDefault" />
            <label className="form-check-label text-black" htmlFor="flexCheckDefault">
              Remember me
            </label>
          </div>
        </form>

        <div className="">
          <div className="forgot-password">
            <a className="" target="_blank" href='#'>
              Forgot password? <span className="sr-only"><i className="bi bi-arrow-up-right"></i></span>
            </a>
          </div>

          <div>
            <span className="">
              Don't have an account? </span>
            <a className="" target="_blank" href='#'>
              Create yours now. <span className="sr-only"><i className="bi bi-arrow-up-right"></i></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login