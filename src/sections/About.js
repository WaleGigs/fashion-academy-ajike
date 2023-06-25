import React from 'react'
import img1 from '../assets/Images/a.jpg'
import img2 from '../assets/Images/d.jpg'
import img3 from '../assets/Images/k.jpg'
 import styled from 'styled-components'
import Book from './Book'
 const Section = styled.section`
    position:relative;
    width:80vw;
    min-height:100vh;
    display:flex;
    margin:0 auto;
    @media (max-width: 48em) {
    width:90vw;    
   }
   @media (max-width: 30em) {
    width:100vw;    
   }
 `
 const Title = styled.h1`
  font-size:${props => props.theme.fontBig};
   font-weight: 300;
   font-family: 'Kaushan Script';
   position:absolute;
top:1rem;
left:5%;
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
 const Left = styled.div`
 width:50%;
 font-size:${props => props.theme.fontlg};
 font-weight: 300;
 position:relative;
 z-index:5;
 margin-top:20%;
 @media (max-width: 64em) {
    width:80%;    
   
    position:absolute;
    top:50%;
    left:0%;
    translate:translate(-50%, -50%) !important;
    margin: 0 auto;
    padding:2rem;
    font-weight:600;
    backdrop-filter:blur(5px);
 background-color:${props => `rgba(${props.theme.textRgba},0.4)`};
 border-radius:20px;
   }
   @media (max-width: 48em) {
    font-size:${props => props.theme.fontmd}; 
   }
   @media (max-width: 30em) {
    font-size:${props => props.theme.fontsm}; 
    width:70%;
   }
 `
 const Right = styled.div`
 width:50%;

 position:relative;
img{
    width: 100%;
    height:auto;
}
.small-img-1{
    width:40%;
    position:absolute;
    right:70%;
    bottom:12%;
}
.small-img-2{
    width:40%;
    position:absolute;
    left:80%;
    bottom:30%;
}
@media (max-width: 64em) {
  width:100%;
  display:flex;
    justify-content:center;
    align-items: center;
    img{
      objectFit: cover;
    }
    .small-img-1{
    width:30%;
    height:auto;
    left:5%;
    bottom:10%;
}
.small-img-2{
    width:30%;
    height:auto;
    left:60%;
    bottom:20%;
}
   }
 `
 const About = () => {
    return (
     
     
        <Section data-scroll-section  id='abouts'>
         <Title data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
            About us
         </Title>
          <Left data-scroll data-scroll-sticky="-2" data-scroll-target="">
          <h3>Our Vision</h3>
          At Ajike De Tailor Academy, our vision is to be a leading fashion academy
           in the South West region of Nigeria, renowned for excellence in pattern drafting 
           and pattern making education. We strive to empower aspiring fashion designers 
          with the skills, knowledge, and creativity needed to succeed in the dynamic fashion industry.

            <br /> 
            <br />
            <h3>Our Mission</h3>
          Our mission is to provide high-quality education and training in
           pattern drafting and pattern making, equipping students with the
            technical expertise and design proficiency required to excel in 
            <br />
            <br />
            <br />
            <h3>Our Values</h3>
            the fashion industry. We are committed to fostering a supportive
             and inclusive learning environment that nurtures individual
              creativity, encourages innovation,
           and prepares our students for successful careers in fashion.
          </Left>
          <Right>
           <img
            src={img1} alt="About us" />
           <img
           data-scroll data-scroll-speed="5"
            src={img2} className='small-img-1' alt="About us" />
           <img 
           data-scroll data-scroll-speed="-2"
            src={img3}  className='small-img-2' alt="About us" />
          </Right>
        </Section>
       
    )
 }
 
 export default About
 