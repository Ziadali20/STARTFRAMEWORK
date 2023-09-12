import React from 'react'

export default function Footer() {
  return (
    <>
    <div className=''>
    <div className="bottom d-flex justify-content-between align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className='text-white text-center'>
              <h3 className='text-center'>LOCATION</h3>
              <p>2215 John Daniel Drive Clark, MO 65243</p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='text-white text-center'>
              <h3 className='text-center'>AROUND THE WEB</h3>
              <div className="social-container d-flex justify-content-center">
                <div className="social mx-2">
                  <i className='fa-brands fa-facebook icon'></i>
                </div>
                <div className="social mx-2">
                  <i className='fa-brands fa-twitter icon'></i>
                </div>
                <div className="social mx-2">
                  <i className='fa-brands fa-linkedin icon'></i>
                </div>
                <div className="social mx-2">
                  <i className='fa-solid fa-globe icon'></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className='text-white text-center'>
              <h3 className='text-center'>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className='bg-dark text-white text-center py-3 text-center'>
    <p>Copyright © Your Website 2021</p>
    </footer>
    </div>
    </>
  )
}
