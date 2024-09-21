import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <>
      <div className='main-body'>
        <div className='upper d-flex justify-content-center align-items-start  '>
          <h2 className='py-4 mt-3 mb-3'>Get in Touch With Me! </h2>
        </div>
        <div className='social-media-buttons d-flex justify-content-center'>
            <a href='https://www.facebook.com/your-facebook-profile' target='_blank' rel='noopener noreferrer'>
              <i style={{ color: 'rgb(73, 176, 73)' }} className='fab fa-facebook-f fa-2x'></i>
            </a>
            <a href='https://www.instagram.com/your-instagram-profile' target='_blank' rel='noopener noreferrer'>
              <i style={{ color: 'rgb(73, 176, 73) ' }} className='fab fa-instagram fa-2x'></i>
            </a>
            <a href='https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAADxOZNABIfuUuC7IW7SekF4gLsIyay-rTMs&keywords=imadadali%20sunasara&origin=RICH_QUERY_SUGGESTION&position=0&searchId=9025141e-1bc2-4872-94b7-97a6500f2bde&sid=Tms&spellCorrectionEnabled=false' target='_blank' rel='noopener noreferrer'>
              <i style={{ color: 'rgb(73, 176, 73) ' }} className='fab fa-linkedin-in fa-2x'></i>
            </a>
            <a href='https://github.com/ImadadAli' target='_blank' rel='noopener noreferrer'>
              <i style={{ color: 'rgb(73, 176, 73) ' }} className='fab fa-github fa-2x'></i>
            </a>
          </div>
          <div class="container">
        <form>
            <input type="text" class="form-control" id="name" placeholder="Enter Your Name" />
            <input type="email" class="form-control" id="email" placeholder="Enter Your Email" />
            <input type="tel" class="form-control" id="phone" placeholder="Enter Your Mobile" />
            <button type="submit" class="btn btn-outline-success">Send Me</button>
        </form>
    </div>
      </div>
    </>
  )
}

export default Contact;