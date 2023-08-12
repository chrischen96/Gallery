import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import axiosInstance from '../../axios.jsx'
// import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import LoginContext from '../../context.jsx'
import { useNavigate } from 'react-router-dom'
import Masonry from '@mui/lab/Masonry';


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
        {/* <ResponsiveMasonry
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
        </ResponsiveMasonry> */}

        <Masonry columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={2}>
          {collection.map((item, index) => (
            <div key={index} >
              <img
                src={`${item.image}?w=162&auto=format`}
                srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                alt={item.title}
                onClick={() => showPhoto(item.id)}
                loading="lazy"
                style={{
                  borderRadius: '8px',
                  width: '100%',
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  )
}

export default Feature