import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context'

const Collection = () => {
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
    <div className='collection'>
      <div className="container">
        <div className="row">
          {collection.map((item) => (
            <div className="col-md-6 px-3">
              <div className="card my-4 shadow-sm p-0">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">Price: ${item.price}</p>
                  <p className="card-text">Size: {item.pixel_width} x {item.pixel_height}</p>
                  <p className="card-text">Focal length: {item.focal_length}mm</p>
                  <div className="d-flex justify-content-center align-items-center mt-3">
                    <div className="btn-group">
                      <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                      <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
