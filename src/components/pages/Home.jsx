import React from 'react'
import highlight from '../../assets/highlight.jpeg'
import browse from '../../assets/browse.jpeg'
import lobos from '../../assets/lobos.jpeg'

const Home = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='filter d-flex align-items-end'>
                    <div className='container-fluid d-flex flex-column align-items-start'>
                        <h1>Xin's Gallery</h1>
                        <h2>
                            Explore the photos shoot by a software engineer. Find your favorite photos and buy them.
                        </h2>
                    </div>
                </div>
            </div>

            <div className='discover my-4'>
                <div className='container-fluid py-3'>
                    {/* <h1 className='my-3'>Discover</h1> */}
                    <div className='row row-cols-sm-3 row-cols-1'>
                        <div className='col mb-3'>
                            <h3>Highlights</h3>
                            <img src={highlight} className='w-100' alt="" />
                        </div>
                        <div className='col mb-3'>
                            <h3>Browse</h3>
                            <img src={browse} className='w-100' alt="" />
                        </div>
                        <div className='col mb-3'>
                            <h3>Search Topic</h3>
                            <img src={lobos} className='w-100' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home