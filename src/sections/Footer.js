import logo from '../assets/Images/AJIKELOGO-removebg-preview.png'
import './footer.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false)
  return (
    <>
        <>
  <div click={click} className="footer">
    <div className="inner">
      <div className="column column1">
      <div className="widget underline">
          <h1>Our Info</h1>
        </div>
        <div  className="widget">
        <Link to={'/'}>
        <img style={{width:'130px', marginTop:'5px',cursor: 'pointer'}} className="" src={logo} alt="" />
        </Link>
        </div>
        <div className="widget">
          <p>
            SW9/442 besides Adets Oil araromi odo-ona South west local government, Ibadan, Nigeria
          </p>
          <p>Mobile No:+2349020862237</p>
        </div>
        <div className="widget mail underline">
          <a href="mailto:info@ajikeacademy.com">info@ajikeacademy.com</a>
        </div>
      </div>
      <div className="column column2">
        <div className="widget underline">
          <h1>Navigations</h1>
        </div>
        <div className="widget">
          <ul>
            <li>
              <a href='#home' onClick={closeMenu}>Home</a>
            </li>
            <li>
            <a href='#abouts' onClick={closeMenu}>About Us</a>
            </li>
            <li>
              <a href='#services' onClick={closeMenu}>Our Services</a>
            </li>
            <li>
              <a href='#gallery' onClick={closeMenu}>Gallery</a>
            </li>
            <li>
              <a><Link to={'/register'}>Enroll Now</Link></a>
            </li>
          </ul>
        </div>
      </div>
      <div className="column column3">
        <div className="widget underline">
          <h1>Who We are</h1>
        </div>
        <div className="widget">
        <p>
        Ajike Academy and Training  is a practical training school, with a new dimension in technical fashion designing based in Ibadan, Nigeria
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="copyright ">
    <div className="left">
      <div className="widget">
        <p>Copyright @ Ajike Academy, 2023. All Rights Reserved</p>
      </div>
    </div>
    <div className="right">
      <div className="widget icons">
      <a href="https://m.facebook.com/ajikedetailor/">
      <i className="fab fa-facebook-f"></i>
      </a>
        <a href="Info@ajikeacademy.com">
        <i className="fab fa-google-plus-g"></i>
        </a>
        
      </div>
    </div>
  </div>
</>

    </>
  )
}

export default Footer