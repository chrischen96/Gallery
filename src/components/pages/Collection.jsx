import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context'
import Masonry from 'masonry-layout'

const Collection = () => {
  const [collection, setCollection] = useState([])

  const manageMasonry = () => {
    const elem = document.querySelector('.grid')
    const msnry = new Masonry(elem, {
      // options
      itemSelector: '.grid-item',
      columnWidth: '.grid-item',
    })
  }

  useEffect(() => {
    const getCollection = async () => {
      await axiosInstance.get('')
        .then((res) => {
          console.log(res.data)
          setCollection(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    getCollection()
  }, [])

  manageMasonry()

  const navigate = useNavigate()

  const showPhoto = (id) => {
    navigate(`${id}`)
  }

  const handleSelect = (e) => {
    const value = e.target.value
    if (value === 'all') {
      setCollection(collection)
    } else {
      const filtered = collection.filter((item) => item.category === value)
      setCollection(filtered)
    }
  }

  return (
    <div className='collection'>
      <div className="container-fluid py-4">
        <div className="grid">
          {collection.map((item) => (
            <div className='grid-item' key={item.id}>
              <div
                className="grid-content"
                style={{ padding: '10px' }}
                onClick={() => showPhoto(item.id)}
              >
                <img src={item.image} className="w-100" alt="..." />

                {/* <div className="pic-card">
                  <div className="shadow-sm p-0">
                    <img src={item.image} className="w-100" alt="..." />
                    <div className="detail">
                      <h5 className="detail-title">{item.title}</h5>
                      <p className="detail-text">Price: ${item.price}</p>
                      <p className="detail-text">Size: {item.pixel_width} x {item.pixel_height}</p>
                      <p className="detail-text">Focal length: {item.focal_length}mm</p>
                      <div className="d-flex justify-content-center align-items-center mt-3">
                        <div className="btn-group">
                          <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                          <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
