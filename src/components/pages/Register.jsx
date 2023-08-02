import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const initialFormData = Object.freeze({
        email: '',
        user_name: '',
        first_name: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim(),
        });
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        if (formData.password !== formData.confirm_password) {
            alert("Passwords don't match!");
        } else {
            axiosInstance
                .post(`users/register/`, {
                    email: formData.email,
                    user_name: formData.user_name,
                    first_name: formData.first_name,
                    password: formData.password,
                })
                .then((res) => {
                    navigate('/login');
                    console.log(res);
                    console.log(res.data);
                });
        }
    };


    return (
        <div className='register'>
            <div className='register-box'>
                <form>
                    <h1 className="h2 mb-5 fw-semibold">Sign up to Xin's Gallery</h1>

                    <div className="form-floating">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">
                            Email Address*
                        </label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="user_name"
                            name="user_name"
                            placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">
                            Username*
                        </label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="text"
                            className="form-control"
                            id="first_name"
                            name="first_name"
                            placeholder="name@example.com"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingInput">
                            First Name*
                        </label>
                    </div>

                    <div className="form-floating">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">
                            Password*
                        </label>
                    </div>

                    <div className="form-floating">
                        <input type="password"
                            className="form-control"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <label htmlFor="floatingPassword">
                            Confirm Password*
                        </label>
                    </div>

                    <div className="form-check text-start my-4">
                        <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                        <label className="form-check-label text-black" htmlFor="flexCheckDefault">
                            <p>By clicking Sign up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
                        </label>
                    </div>

                    <button
                        className="btn btn-primary w-100 py-2"
                        type="submit"
                        onClick={handleSubmit}
                    >
                        Sign up
                    </button>
                </form>
            </div>

        </div>
    )
}
export default Register