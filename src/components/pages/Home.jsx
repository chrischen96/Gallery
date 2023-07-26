import React from 'react'

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

            <div className='discover mt-3'>
                <div className='container-fluid'>
                    <h1 className='my-3'>Discover</h1>
                    <div className='row row-cols-sm-3 row-cols-1'>
                        <div className='col'>
                            <h3>Highlights</h3>
                        </div>
                        <div className='col'>
                            <h3>Browse Collect</h3>
                        </div>
                        <div className='col'>
                            <h3>Search Topic</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home