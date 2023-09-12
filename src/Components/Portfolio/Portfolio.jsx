import React, { useEffect } from 'react'
import myImage1 from '../../images/poert1.png';
import myImage2 from '../../images/port2.png';
import myImage3 from '../../images/port3.png';
import $ from 'jquery'

export default function Portfolio() {
      useEffect(() => {
          function jqueryy() {
            $('.image').on('click', function () {
              let imgSrc = $(this).find('img').attr('src');
              $('.portfolioLayer').addClass('d-flex').removeClass('d-none');
              $('.portfolioLayer img').attr('src', imgSrc);
              $('.closeBtn').on('click', function () {
                $('.portfolioLayer').addClass('d-none').removeClass('d-flex');
              })
              $('document').on('click', function () {
                $('.portfolioLayer').addClass('d-none').removeClass('d-flex');
              })
            });
          }
      
          jqueryy();
        }, []);
  return (
<>
<section id="Portfolio ">
<div className="container">
<div className="row">
<div className="py-5">
<h2 className='fs-1 fw-bolder text-center'>PORTFOLIO COMPONENT</h2>
<div className="divider d-flex justify-content-center align-items-center mb-3">
        <div className="line bg-dark"></div>
        <i className='fa-solid fa-star px-2'></i>
        <div className="line bg-dark"></div>
</div>
<div className="gallery">
    <div className="row gy-3">
        <div className="col-lg-4" >
            <div className="image position-relative">
            <img src={myImage1} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4"  >
            <div className="image position-relative">
            <img src={myImage2} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4"  >
            <div className="image position-relative">
            <img src={myImage3} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4"  >
            <div className="image position-relative">
            <img src={myImage1} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4"  >
            <div className="image position-relative">
            <img src={myImage2} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
        <div className="col-lg-4"  >
            <div className="image position-relative">
            <img src={myImage3} className='w-100' />
            <div className="layer d-flex justify-content-center align-items-center">
            <i className='text-white fa-solid fa-plus fa-6x'></i>
            </div>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>

<div className='portfolioLayer d-none justify-content-center align-items-center'>
        <div className='position-relative'>
        <img src={myImage1} className='showLayer' alt="" />
        </div>
        <div className='closeBtn'>
          <i className="fa-solid fa-circle-xmark text-white"></i>
        </div>
      </div>
</section>
</>
);
  
}