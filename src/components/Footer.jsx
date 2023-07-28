import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="container-fluid">
        <div className="py-3">
          {/* <div className="row">
            <div className="col-6 col-md-3 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>
            <div className="col-6 col-md-3 mb-3">
              <h5>Section</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
                  <input id="newsletter1" type="text" className="form-control" placeholder="Email address"/>
                    <button className="btn btn-primary" type="button">Subscribe</button>
                </div>
              </form>
            </div>
          </div> */}

          <ul className="nav justify-content-center pb-2">
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Home</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Features</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">Pricing</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">FAQs</a></li>
            <li className="nav-item"><a href="#" className="nav-link px-2 text-body-secondary">About</a></li>
          </ul>
          <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center py-2 border-top">
            <p className='m-0'>© 2023 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex m-0">
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-linkedin"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-instagram"></i></a></li>
              <li className="ms-3"><a className="link-body-emphasis" href="#"><i className="bi bi-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer