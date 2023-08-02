import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axiosInstance from '../../axios.jsx'
import LoginContext from '../../context.jsx'
import { useNavigate } from 'react-router-dom'


const Cart = () => {
    const { loginUser, setLoginUser } = useContext(LoginContext)
    const [cart, setCart] = useState(null)
    const [photos, setPhotos] = useState(null)
    const user = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        const token = localStorage.getItem('access')
        console.log(user)
        const getCart = async () => {
            await axiosInstance
                .get(`cart/${user.email}`)
                .then(async (res) => {
                    setCart(res.data)
                    console.log(res.data)
                    const cartPhotos = res.data.photos
                    console.log(cartPhotos)
                    const photoItems = []
                    for (let i = 0; i < cartPhotos.length; i++) {
                        console.log(cartPhotos[i])
                        axiosInstance
                            .get(`photos/${cartPhotos[i]}`)
                            .then((res) => {
                                console.log(res.data)
                                photoItems.push(res.data)
                                setPhotos(photoItems)
                            })
                    }
                    console.log(photoItems)
                    
                })
                .catch((err) => console.log(err))
        }
        getCart()
    }, [user.email])

    const navigate = useNavigate()

    if (!cart) {
        return null
    } else {

    }

    const handleDelete = async (id) => {
        cart.photos = cart.photos.filter(photo => photo !== id)
        await axiosInstance
            .put(`cart/${user.email}/`, cart)
            .then((res) => {
                console.log(res.data)
            })
            .catch((err) => console.log(err))

        await axiosInstance
            .get(`cart/${user.email}`)
            .then(async (res) => {
                setCart(res.data)
                const cartItem = res.data
                console.log(cartItem)
                const cartPhotos = cartItem.photos
                const photos = []
                for (let i = 0; i < cartPhotos.length; i++) {
                    await axiosInstance
                        .get(`photos/${cartPhotos[i]}`)
                        .then((res) => {
                            // console.log(res.data)
                            photos.push(res.data)
                            setPhotos(photos)
                        })
                }
            })
            .catch((err) => console.log(err))
    }

    return (
        <div className='cart'>
            <div className="container-fluid" style={{ maxWidth: '980px' }}>
                <div className="detail-head">
                    <div className="detail-head-grid">
                        <button className="detail-head-back">
                            <Link to='/collection'><h1><i className="bi bi-arrow-left-short"></i></h1></Link>
                        </button>
                        <div className="detail-head-name">
                            <h1 className='lh-lg'>Welcome, {user.first_name} <br /> This is your Cart</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ maxWidth: '980px' }}>
                <div class="row">
                    {
                        photos.map(photo => (
                            <div className="col-6 my-5" key={photo.id}>
                                <div className="">
                                    <div style={{}}>
                                        <img
                                            className=''
                                            src={photo.image}
                                            style={{ height: '300px', width: '300px', objectFit: 'cover' }}
                                            alt="" />
                                    </div>
                                    <h5 className="card-title my-3">{photo.title}</h5>
                                    <p className="card-text">Price: ${photo.price}</p>
                                    <button className="btn btn-primary" onClick={() => {
                                        handleDelete(photo.id)
                                    }}>Delete</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <h1 className='mb-5'>
                    Total Price: ${photos.reduce((a, b) => a + b.price, 0)}
                </h1>
            </div>
        </div>
    )
}

export default Cart