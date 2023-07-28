import React from 'react'
import UserContext from '../../context'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [collection, setCollection] = useState([])
  const [user, setUser] = useState(null)

  useEffect(() => {
    const getCollection = async () => {
      try {
        await axiosInstance.get('')
          .then((res) => {
            console.log(res.data)
            setCollection(res.data)
          })
      } catch (err) {
        console.log(err)
      }
    }
    getCollection()
  }, [])

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
              // onChange={handleChange}
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
              // onChange={handleChange}
            />
            <button
              className="goto"
              type="submit"
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