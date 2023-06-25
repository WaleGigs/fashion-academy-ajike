import React from 'react'
import './service.css'
import styled from 'styled-components'
import { motion } from 'framer-motion'
const Title = styled.h1`
  font-size:${props => props.theme.fontBig};
   font-weight: 300;
   font-family: 'Kaushan Script';
   ${'' /* position:absolute;
top:1rem;
left:5%; */}
z-index:5;
@media (max-width: 64em) {
  font-size:${props => `calc(${props.theme.fontBig} - 5vw)`};
  top:0;
  left:0;
    
   }
   @media (max-width: 48em) {
    font-size:${props => props.theme.fontxxxl};
  
   }
 `
 
const Service = () => {
  return (
    <section  id='services'  className="section service-section">
   <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className='container'>
    Our Services
    </Title>  <br/> <br/>
  <section className="service-card-wrapper">
    <div className="service-card">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Fashion School</h3>
        <p className="service-brief">
          We Offer a variety of major and concentrations within the world of fashion.
        </p>
      </div>
    </div>
    <div className="service-card">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Pattern Drafting</h3>
        <p className="service-brief">
          We ensure the construction of measurements of different body parts on paper in order to make a well fitted garment.
        </p>
      </div>
    </div>
    <div className="service-card">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Sewing Techniques</h3>
        <p className="service-brief">
        Learning new sewing techniques will always make a difference in the way you put a garment together.
        </p>
      </div>
    </div>
    <div className="service-card">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Bespoke Tailoring</h3>
        <p className="service-brief">
        we make clothes based on individual patterns and your specific measurements as a customer.
        </p>
      </div>
    </div>
    <div className="service-card">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Ready-to-Wear</h3>
        <p className="service-brief">
        We have clothes in standard sizes and available from merchandise in stock.
        </p>
      </div>
    </div>
    <div className="service-card">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height={16}
        fill="currentColor"
        className="bi bi-stack"
        viewBox="0 0 16 16"
      >
        <path d="m14.12 10.163 1.715.858c.22.11.22.424 0 .534L8.267 15.34a.598.598 0 0 1-.534 0L.165 11.555a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.66zM7.733.063a.598.598 0 0 1 .534 0l7.568 3.784a.3.3 0 0 1 0 .535L8.267 8.165a.598.598 0 0 1-.534 0L.165 4.382a.299.299 0 0 1 0-.535L7.733.063z" />
        <path d="m14.12 6.576 1.715.858c.22.11.22.424 0 .534l-7.568 3.784a.598.598 0 0 1-.534 0L.165 7.968a.299.299 0 0 1 0-.534l1.716-.858 5.317 2.659c.505.252 1.1.252 1.604 0l5.317-2.659z" />
      </svg>
      <div className="service-card-content">
        <h3 className="service-title">Business of Fashion</h3>
        <p className="service-brief">
       Our mission is to open, inform and connect the global fashion industry. At the core of this mission
         is our dedication to creating high-quality news and analysis.
        </p>
      </div>
    </div>
  </section>
</section>

  )
}

export default Service