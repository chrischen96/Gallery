import React from 'react'
import { useState, useEffect } from 'react'
import axiosInstance from '../../axios.jsx'
import { useNavigate } from 'react-router-dom'
import UserContext from '../../context'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
// import Box from '@mui/material/Box';
// import Masonry from '@mui/lab/Masonry';


const Collection = () => {
  const [collection, setCollection] = useState([])

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
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 400: 1, 680: 2, 990: 3, 1400: 4 }}
        >
          <Masonry>
            {collection.map((item) => (
              <div className='pic-item' key={item.id} style={{padding:'12px'}}>
                <img
                  key={item.id}
                  src={item.image}
                  className="pic w-100"
                  onClick={() => showPhoto(item.id)}
                  alt={item.title}
                  style={{borderRadius: '8px', cursor: 'pointer'}}
                />
              </div>

            ))}
          </Masonry>
        </ResponsiveMasonry>

        {/* <Box sx={{ width: 500, minHeight: 829 }}> */}
          {/* <Masonry columns={{xs:1, sm:2, md:3, lg:4}} spacing={2}>
            {collection.map((item, index) => (
              <div key={index} >
                <img
                  src={`${item.image}?w=162&auto=format`}
                  srcSet={`${item.image}?w=162&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    borderRadius: '8px',
                    width: '100%',
                  }}
                />
              </div>
            ))}
          </Masonry> */}
        {/* </Box> */}

        {/* <div className="grid">
          {collection.map((item) => (
            <div className='grid-item' key={item.id}>
              <div
                className="grid-content"
                style={{ padding: '10px' }}
                onClick={() => showPhoto(item.id)}
              >
                <img src={item.image} className="w-100" alt="..." />
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default Collection
