import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axiosInstance from "../../axios.jsx";

const Photo = () => {
    const { id } = useParams()
    const [photo, setPhoto] = useState(null)

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

    if (!photo) {
        return null
    } else {
        console.log(photo)
    }

    return (
        <div className="photo">
            <div className="container-fluid" style={{ maxWidth: '1080px'}}>
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

            <div className="container-fluid" style={{maxWidth:'1080px', marginBottom:'80px'}}>
                <div className="detail-hero-img mb-4">
                    <img src={photo.image} alt="" className="" />
                </div>

                <div className="row detail-info">
                    <div className="col-md my-3">
                        <p className="text-start"><span>Title: </span>{photo.title}</p>
                        <p className="text-start"><span>Date: </span>{photo.date}</p>
                        <p className="text-start"><span>Dimension: </span>{photo.pixel_width} x {photo.pixel_height}</p>
                        <p className="text-start"><span>ISO: </span>{photo.iso}</p>
                        <p className="text-start"><span>Focal Length: </span>{photo.focal_length}mm</p>
                        <p className="text-start"><span>F Number: </span>f/{photo.f_number}</p>
                        <p className="text-start"><span>Shutter Speed: </span>{photo.exposure_time}</p>
                        <p className="text-start"><span>Theme: </span>{photo.theme}</p>
                        <p className="text-start"><span>Location: </span>{photo.location}</p>
                        <p className="text-start"><span>Price: </span>${photo.price}</p>
                        <button className="btn btn-primary my-2">Add to Cart</button>
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
                {/* <div className="grid">
                    <div className="grid-item">
                        <div className="detail-hero-img">
                            <img src={photo.image} alt="" className="" />
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="">
                            <p className="text-center">Title: {photo.title}</p>
                            <p className="text-center">Date: {photo.date}</p>
                            <p className="text-center">Dimension: {photo.pixel_width} x {photo.pixel_height}</p>
                            <p className="text-center">ISO: {photo.iso}</p>
                            <p className="text-center">Focal Length: {photo.focal_length}mm</p>
                            <p className="text-center">F Number: f/{photo.f_number}</p>
                            <p className="text-center">Shutter Speed: {photo.exposure_time}</p>
                            <p className="text-center">Theme: {photo.theme}</p>
                            <p className="text-center">Location: {photo.location}</p>
                            <p className="text-center">Price: ${photo.price}</p>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="col-md">
                            <iframe
                                style={{ border: '0' }}
                                loading="lazy"
                                allowFullScreen
                                referrerPolicy="no-referrer-when-downgrade"
                                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCznPdhtUTBEN9cGz_M9EdHHQN0ZObD5So&q=${photo.location.replace(/\s/g, '%20')}`}>
                            </iframe>
                        </div>
                    </div>

                </div> */}
            </div>



        </div>
    )
}

export default Photo