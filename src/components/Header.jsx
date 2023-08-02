import React from 'react'
import { Link } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import axiosInstance from '../axios.jsx'
import LoginContext from '../context.jsx'
import jwtDecode from 'jwt-decode'

const Header = () => {

    const { loginUser, setLoginUser } = useContext(LoginContext)

    useEffect(() => {
        const token = localStorage.getItem('access')
        if (token) {
            const decoded = jwtDecode(token)
            const getUser = () => {
                axiosInstance.get(`users/profile/${decoded.user_id}/`, { headers: { Authorization: `JWT ${token}` } })
                    .then(res => {
                        setLoginUser(res.data)
                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            getUser()
        }
    }, [])



    const handleClick = () => {
        if (window.innerWidth < 768) {
            document.getElementById('toggler').click();
        }
    }

    const logout = () => {
        localStorage.removeItem('access')
        localStorage.removeItem('refresh')
        localStorage.removeItem('user')
        setLoginUser(null)
        window.location.reload()
    }

    return (
        <div className='header'>
            <nav className="navbar navbar-expand-md ">
                <div className="container-fluid align-items-baseline">

                    <Link className="navbar-brand" to='/'>Xin's Gallery</Link>

                    <button id='toggler' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-md-0 w-100">
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/feature">Feature</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/collection">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-md-auto">
                                {
                                    loginUser ? <Link className="nav-link active fw-bold" onClick={handleClick} to='/profile'>{loginUser.user_name}</Link> : <Link className="nav-link active" onClick={handleClick} to="/login">Log in</Link>
                                }
                            </li>
                            {loginUser && <li className="nav-item mx-2">
                                <Link className="nav-link active" onClick={handleClick} to="/cart">Cart</Link>
                            </li>}
                            <li className="nav-item">
                                {
                                    loginUser ? <Link className="nav-link active" onClick={logout}>Log out</Link> : <Link className="nav-link active" onClick={handleClick} to="/register">Sign up</Link>
                                }
                            </li>
                            
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header