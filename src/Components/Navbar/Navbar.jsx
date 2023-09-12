import React, { useEffect } from 'react'
import $ from 'jquery';
import { Link, useLocation} from 'react-router-dom';
export default function Navbar() {

  const location = useLocation();
    useEffect(() => {
        $('.navbar .nav-link').each(function () {
            const linkPath = $(this).attr('href');
            if (linkPath === location.pathname) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }
        });
    }, [location]);
  useEffect(() => {
    function handleScroll() {
      let sectionOffset = $('section').offset().top;
      let wScroll = $(window).scrollTop();

      if (wScroll > sectionOffset) {
        $('nav').addClass('py-lg-1').removeClass('py-lg-4');
      } else {
        $('nav').removeClass('py-lg-1').addClass('py-lg-4');
      } 
    }
    $(window).on('scroll', handleScroll);
  }, []);
  return (
    <>
<nav class="navbar navbar-expand-lg px-lg-5 py-lg-4 position-fixed top-0 start-0 end-0">
  <div class="container-fluid">
  <Link class="navbar-brand text-white text-uppercase fw-bold fs-2" aria-current="page" to='/'>START FRAMEWORK</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link text-uppercase fw-bold text-white" to='ABOUT'>ABOUT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-uppercase fw-bold text-white" to='PORTFOLIO'>PORTFOLIO</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link text-uppercase fw-bold text-white" to='Contact'>Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}