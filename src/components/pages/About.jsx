import React from 'react'
import portrait from '../../assets/Self.jpeg'
import In_the_Woods from '../../assets/In_the_Woods.jpeg'
import Cigarette from '../../assets/Cigarette.jpeg'
import Mountain from '../../assets/Mountain.jpeg'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useState, useEffect } from 'react'

const About = () => {
  const myPortraits = [
    portrait,
    In_the_Woods,
    Cigarette,
    Mountain
  ]
  return (
    <div className='about'>
      <div className="content">
        <div className="rounded p-4 justify-content-center">
          <div className='d-flex'>
            <div className="card-body">
              <h1 className="card-title my-5">About Me</h1>
              <h5 className="card-text my-5" style={{fontSize:'30px'}}>
                Through my lens, I strive to capture the beauty, emotions, and stories that unfold before me, freezing moments in time that are cherished for a lifetime. It's a way of life that allows me to express my creativity and connect with people and the world around me.
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid my-3'>
        <div>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 400: 1, 680: 2, 1200: 2, 1400: 2 }}
          >
            <Masonry>
              {myPortraits.map((item, index) => (
                <div className='pic-item' key={index} style={{ padding: '12px' }}>
                  <img
                    src={item}
                    className="pic w-100"
                    style={{ borderRadius: '8px'}}
                  />
                </div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </div>

      </div>
    </div>
  )
}

export default About