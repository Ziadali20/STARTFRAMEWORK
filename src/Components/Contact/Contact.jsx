import React, { useEffect } from 'react'
import $ from 'jquery';

export default function Contact() {

  useEffect(() => {
  const labels = $('label');
  labels.fadeOut(0);

  $('.contactContent input').on('input', function () {
    const label = $(this).prev('label');
    if ($(this).val() === '') {
      label.fadeOut(300);
    } else {
      label.fadeIn(300);
    }
  });
}, []);
  return (
    <>
    <section id="contact">
<div className="container">
<div className="py-5">
<h2 className='fs-1 fw-bolder text-center'>CONATCT SECTION</h2>
<div className="divider d-flex justify-content-center align-items-center mb-3">
        <div className="line bg-dark"></div>
        <i className='fa-solid fa-star px-2'></i>
        <div className="line bg-dark"></div>
</div>
<div className="row">
<div class="mb-3 contactContent">
  <label class="my-1">userName</label>
  <input type="text" class="form-control"  placeholder="UserName"/>
</div>
<div class="mb-3 contactContent">
  <label class="my-1">userAge</label>
  <input type="number" class="form-control"  placeholder="userAge"/>
</div>
<div class="mb-3 contactContent">
  <label class="my-1">userEmail</label>
  <input type="email" class="form-control"  placeholder="userEmail"/>
</div>
<div class="mb-3 contactContent">
  <label class="my-1">userPassword</label>
  <input type="password" class="form-control"  placeholder="userPassword"/>
</div>
<button type="button" class="btn w-25 btn-lg  d-inline-block cBtn text-white">Send message</button>  
</div>
</div>
</div>
</section>
</>
  )
  
}





