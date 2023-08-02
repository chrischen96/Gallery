import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axiosInstance from '../../axios.jsx'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import LoginContext from '../../context.jsx'
import { useNavigate } from 'react-router-dom'


const Feature = () => {
  const [collection, setCollection] = useState([])

  useEffect(() => {
    const getCollection = async () => {
      await axiosInstance.get('photos/theme/Portrait')
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

  const navigate = useNavigate()

  const showPhoto = (id) => {
    navigate(`/collection/${id}`)
  }

  return (
    <div className='feature'>
      <div className='hero'>
        <div className='filter d-flex align-items-end'>
          <div className='container-fluid d-flex flex-column align-items-start'>
            <h1>PORTRAIT</h1>
            <h2>
              Photo portraits capture people as they are in a particular moment, preserving memories of loved ones, friends, and special occasions.
            </h2>
          </div>
        </div>
      </div>

      <div className="container-fluid py-4">
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 980: 2, 1200: 3 }}
        >
          <Masonry>
            {collection.map((item) => (
              <div className='pic-item' key={item.id} style={{ padding: '12px' }}>
                <img
                  key={item.id}
                  src={item.image}
                  className="pic w-100"
                  onClick={() => showPhoto(item.id)}
                  alt={item.title}
                  style={{ borderRadius: '8px', cursor: 'pointer' }}
                />
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  )
}

export default Feature