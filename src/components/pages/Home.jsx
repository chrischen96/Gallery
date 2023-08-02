import React from 'react'
import { Link } from 'react-router-dom'
import highlight from '../../assets/highlight.jpeg'
import browse from '../../assets/browse.jpeg'
import lobos from '../../assets/lobos.jpeg'
import about from '../../assets/about.jpeg'

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
                    <div className='row row-cols-md-3 row-cols-1'>
                        <div className='col my-4'>
                            <h3>Highlights</h3>
                            <Link to='/feature'>
                                <img src={highlight} className='w-100' alt=""/>
                            </Link>
                        </div>
                        <div className='col my-4'>
                            <h3>Browse</h3>
                            <Link to='/collection'>
                                <img src={lobos} className='w-100' alt="" />
                            </Link>
                        </div>
                        <div className='col my-4'>
                            <h3>About Me</h3>
                            <Link to='about'>
                                <img src={about} className='w-100' alt="" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home