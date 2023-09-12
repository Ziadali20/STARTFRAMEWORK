import React from 'react'
import myImage from '../../images/avataaars.svg';
export default function Home() {
  return (
    <>
    <section id='Home'>
      <div className="container">
        <div className="row">
          <div className=' section-content'>
          <div className='home-image mb-4'>
            <img src={myImage} className='w-100'/>
          </div>
          <div className="home-content text-center">
            <h2 className='fs-1 fw-bolder'>START FRAMEWORK</h2>
            <div className="divider d-flex justify-content-center align-items-center mb-3">
              <div className="line"></div>
              <i className='fa-solid fa-star px-2'></i>
              <div className="line"></div>

            </div>
            <p>Graphic Artist - Web Designer - Illustrator</p>
          </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
