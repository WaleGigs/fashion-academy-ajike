import React from 'react'
import styled from 'styled-components'
import './gallery.css'
import { motion } from 'framer-motion'
import a from '../assets/Images/a.jpg'
import b from '../assets/Images/b.jpg'
import c from '../assets/Images/c.jpg'
import d from '../assets/Images/d.jpg'
import e from '../assets/Images/e.jpg'
import f from '../assets/Images/f.jpg'
import g from '../assets/Images/g.jpg'
import h from '../assets/Images/h.jpg'
import i from '../assets/Images/i.jpg'

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
const Gallery = () => {
  return (
    <section data-scroll-section id='gallery' className='head' >
   <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className='container'>
    Gallery
    </Title>   <br/>  <br/>
    <section className="aboutus-wrapper">      
        <div className="aboutus-content-wrapper">
          
    <div className="aboutus-scroll">
  <div className="each-aboutus-scroll">
    <img
      src={a}
      alt="Afrimama Illstration1"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={b}
      alt="Afrimama Illustration2"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={c}
      alt="Afrimama Illustration3"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={d}
      alt="Afrimama Illustration4"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
     src={e}
      alt="Afrimama Illustration5"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={f}
      alt="Afrimama Illustration6"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
     src={g}
      alt="Afrimama Illustration3"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={h}
      alt="Afrimama Illustration4"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
      src={i}
      alt="Afrimama Illustration5"
    />
  </div>
  <div className="each-aboutus-scroll">
    <img
     src={h}
      alt="Afrimama Illustration6"
    />
  </div>
</div>

</div>
      </section>
   
    
 
</section>

  )
}

export default Gallery;