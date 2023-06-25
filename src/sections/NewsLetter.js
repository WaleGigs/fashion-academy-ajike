import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import './footer.css'
const Title = styled.h1`
  font-size:${props => props.theme.fontxxxl};
   font-weight: 300;
   font-family: 'Kaushan Script';
   ${'' /* position:absolute;
top:1rem;
left:5%; */}
z-index:5;
@media (max-width: 64em) {
  font-size:${props => `calc(${props.theme.fontxxxl} - 5vw)`};
  top:0;
  left:0;
    
   }
   @media (max-width: 48em) {
    font-size:${props => props.theme.fontxxl};
  
   }
   `
const NewsLetter = () => {
  return (
    <div className="suscribe ">
  <div className="widget">
  <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal" className='container'>
    Subscribe To Newsletter
    </Title>  <br/> <br/>
   
  </div>
  <div className="widget">
    <div className="submit">
      <input type="email" placeholder="Your Email Address" />
      <a>Suscribe</a>
    </div>
  </div>
  <div className="widget hr">
    <hr />
  </div>
</div>
  )
}

export default NewsLetter