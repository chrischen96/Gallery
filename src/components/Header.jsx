import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    const handleClick = () => {
        if (window.innerWidth < 768) {
            document.getElementById('toggler').click();
        }
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
                                <Link className="nav-link active" onClick={handleClick} to="/collection">Collection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/">Shop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/about">About</Link>
                            </li>
                            <li className="nav-item ms-md-auto">
                                <Link className="nav-link active" onClick={handleClick} to="/login">Sign in</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/register">Sign up</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" onClick={handleClick} to="/about">Cart</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header