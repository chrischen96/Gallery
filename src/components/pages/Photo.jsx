import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axiosInstance from "../../axios.jsx";
import LoginContext from "../../context.jsx";


const Photo = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState(null)
    const [cart, setCart] = useState(null)
    const { loginUser } = useContext(LoginContext)
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('user'))
    )

    useEffect(() => {
        const getPhoto = async () => {
            console.log(id)
            await axiosInstance.get(`photos/${id}`)
                .then((res) => {
                    setPhoto(res.data)
                })
                .catch((err) => console.log(err))
        }
        getPhoto()
    }, [id]);

    const navigate = useNavigate()

    if (!photo) {
        return null
    } else {
    }

    const handleClick = async () => {
        await axiosInstance
            .get(`cart/${user.email}`)
            .then((res) => {
                const cart = res.data
                cart.photos.push(photo.id)
                console.log(cart)
                axiosInstance
                    .put(`cart/${user.email}/`, cart)
                    .then((res) => {
                        console.log(res.data)
                    })
            })
            .catch((err) => console.log(err))
    }


    return (
        <div className="photo">
            <div className="container-fluid" style={{ maxWidth: '1080px' }}>
                <div className="detail-head">
                    <div className="detail-head-grid">
                        <button className="detail-head-back">
                            <Link to='/collection'><h1><i className="bi bi-arrow-left-short"></i></h1></Link>
                        </button>
                        <div className="detail-head-name">
                            <h1>{photo.title}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ maxWidth: '1080px', marginBottom: '50px' }}>
                <div className="detail-hero-img">
                    <img src={photo.image} alt="" className="" />
                </div>

                <div className="row detail-info">
                    <div className="col-md my-3">
                        <div className="param">
                            <p className="text-start"><span>Title: </span>{photo.title}</p>
                            <p className="text-start"><span>Date: </span>{photo.date}</p>
                            <p className="text-start"><span>Dimension: </span>{photo.pixel_width} x {photo.pixel_height}</p>
                            <p className="text-start"><span>ISO: </span>{photo.iso}</p>
                            <p className="text-start"><span>Focal Length: </span>{photo.focal_length}mm</p>
                            <p className="text-start"><span>F Number: </span>f/{photo.f_number}</p>
                            <p className="text-start"><span>Shutter Speed: </span>{photo.exposure_time}</p>
                            <p className="text-start"><span>Theme: </span>{photo.theme}</p>
                            <p className="text-start"><span>Location: </span>{photo.location}</p>
                            <p className="text-center fw-bold"><span>Price: </span>${photo.price}</p>
                            <button
                                className="btn btn-primary mt-2"
                                data-bs-toggle="modal"
                                data-bs-target="#addtocart"
                                onClick={handleClick}
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>

                    <div className="col-md my-3">
                        <iframe
                            style={{ border: '0' }}
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCznPdhtUTBEN9cGz_M9EdHHQN0ZObD5So&q=${photo.location.replace(/\s/g, '%20')}`}>
                        </iframe>
                    </div>

                </div>

                {/* Modal */}
                {
                    loginUser ? (
                        <div className="modal fade" id="addtocart" tabIndex="-1" aria-labelledby="addtocart" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="ModalLabel">Selected Photo</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h5 className="my-4">
                                            Photo has been added to cart.
                                        </h5>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue Browsing</button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-dismiss="modal"
                                            onClick={() => { navigate('/cart') }}
                                        > Go to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="modal fade" id="addtocart" tabIndex="-1" aria-labelledby="addtocart" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h1 className="modal-title fs-5" id="ModalLabel">Selected Photo</h1>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <h5 className="my-4">
                                            Please log in to add photos to cart.
                                        </h5>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Continue Browsing</button>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            data-bs-dismiss="modal"
                                            onClick={() => { navigate('/login') }}
                                        > Log in
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }


            </div>
        </div>
    )
}

export default Photo