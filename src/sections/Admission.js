import React, { useState } from 'react'
import img1 from '../assets/Images/a.jpg'
import img2 from '../assets/Images/d.jpg'
import logo from '../assets/Images/AJIKELOGO-removebg-preview.png'
 import styled from 'styled-components'
 import {Modal} from 'react-bootstrap';
 import { Link } from 'react-router-dom'
 import './Admission.css'
 const Admission = () => {
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    return (
        <>
            <div id="main-wrapper" className="form-login-register">
    <div className="container-fluid px-0">
        <div className="row g-0 min-vh-100">
            <div className="col-md-6 col-lg-7 bg-light">
                <div className="hero-wrap d-flex align-items-center h-100">
                    <div className="hero-mask opacity-8"></div>
                    <div className="hero-bg hero-bg-scroll"> </div>
                    <div className="hero-content mx-auto w-100 h-100 d-flex flex-column">
                        <div className="container">
                            <div className="row g-0 mt-5">
                                <div className="col-11 col-md-10 col-lg-9 mx-auto">
                                    <h1 className="text-13 text-white fw-600 mb-4">
                                        To keep connected with largest Fashion Academy in Nigeria.
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-6 col-lg-5 d-flex flex-column align-items-center">
                <div className="container pt-4">
                    <div className="row g-0">
                        <div className="col-11 col-md-10 col-lg-9 mx-auto">
                            <div className="logo">
                                    <Link to={'/'}>
                                    <a href='f' className="fw-600 text-6 text-dark">
                                    <img style={{width:'10rem'}} src={logo} alt="" />
                                   
                                </a>
                                    </Link>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-auto py-3">
                    <div className="row g-0">
                        <div className="col-11 col-md-10 col-lg-9 mx-auto">
                            <h3 className="text-12 mb-4">Register Now</h3>
                            <div id="signupForm"  >
                                <label className="form-label fw-500" for="fullName">First Name</label>
                                <div>
                                    <input type="text" className="form-control bg-light border-light" id="fullName"
                                   
                                        placeholder="First Name" formControlName="name"/>
                                    
                                </div> <div>
                                <label className="form-label fw-500" for="fullName">Last Name</label>
                                    <input type="text" className="form-control bg-light border-light" id="fullName"
                                   
                                        placeholder="Last Name" formControlName="name"/>
                                    
                                </div>
                                <label className="form-label fw-500" for="emailAddress">Email Address</label>
                                <div >
                                    <input type="email" className="form-control bg-light border-light" id="emailAddress"
                                  
                                         placeholder="Email Address" formControlName="email"/>
                                    
                                </div>
                                <label className="form-label fw-500" for="loginPassword">Address</label>
                                <div>
                                    <input type="text"
                                        className="form-control form-control-lg bg-light border-light" id="loginPassword"
                                        
                                         placeholder="Enter your address" formControlName="password"/>
                                   
                                </div>
                                <label className="form-label fw-500" for="loginPassword">Date of Birth</label>
                                <div>
                                    <input type="date"
                                        className="form-control form-control-lg bg-light border-light" id="loginPassword"
                                        
                                         placeholder="Enter your address" formControlName="password"/>
                                   
                                </div>
                                <br />

                                <label className="form-label fw-500" for="loginPassword">Gender</label>
                                <div>
                                <span>Male</span> <input style={{cursor: 'pointer'}} type="radio" name="radio" id="" />
                                <span style={{marginLeft:'20px'}}>Female</span> <input style={{cursor: 'pointer'}} type="radio" name="radio" id="" />
                                </div> 
                                <div className="form-check my-4">
                                    <input style={{cursor: 'pointer'}} id="agree" name="agree" className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label" for="agree">
                                        I agree to the <a href="h">Terms</a> and <a href="#">Privacy</a>.
                                    </label>
                                </div>
                                <div className="d-grid my-4">
                                    <button onClick={handleShow} className="btn btn-dark btn-lg" 
                                    >
                                        Submit
                                    </button>
                                </div>
                                <p className="text-2 text-muted text-center">
                                    Already a memeber? <a href='p'><Link to={'/home'}>Go home</Link></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
</div>



<Modal className="my-modal" show={show} onHide={handleClose}>

<Modal.Header closeButton className="mymodal-head">
   

</Modal.Header>

<Modal.Body className="mymodal-body">
    <h1 style={{textAlign:'center', fontFamily:'cursive'}}> Successful
    <i style={{color:' green',  marginLeft:'15px', fontSize:'40px'}} class="fa-regular fa-circle-check"></i>
     </h1>
     <Modal.Footer>
     <h3 style={{textAlign:'center'}}>
        We will get back to you later
        </h3>
     </Modal.Footer>
</Modal.Body>



</Modal>
        </>
    )
 }
 
 export default Admission
 