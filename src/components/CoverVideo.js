import React from 'react'
import styled from 'styled-components'
import logo from '../assets/Images/AJIKELOGO-removebg-preview.png'
import mainImage2 from '../assets/Images/th.jpg'
import { motion   } from 'framer-motion'
const textVariant = {
    hidden:{
        opacity:0,
        x:-50,
        pathLength:0
    },
    visible:{
        opacity:1,
        x:-5,
        pathLength:1,


        transition:{
        duration:4,
        delay:2,
        ease:'easeInOut'
    }
    },
   

}
const VideoContainer = styled.section`
width:100%;
height:100vh;
position:relative;
@media (max-width: 48em) {
    object-position : center 10%;
}
@media (max-width: 30em) {
    object-position : center 50%;
}

img{
    width: 100%;
    height:100vh;
    object-fit:cover;
}
`
const DarkOverlay  = styled.div`
position:absolute;
top:0;
left:0-;
bottom:0;
right:0;
z-index:1; 
background-color: ${props => `rgba(${props.theme.bodyRgba},0.9)`};
`
const Title = styled(motion.div)`
position:absolute;
top:0;
left:0;
bottom:0;
right:0;
z-index:5;
display:flex;
flex-direction: column;
justify-content:center;
align-items: center;
color:${props => props.theme.text};
div{
    display:flex;
    flex-direction: row; 
}
h1{
    color:white;
    font-family: 'Sirin Stencil';
    font-size:${props => props.theme.fontBig};
    text-shadow: 1px 1px 1px ${props => props.theme.body} ;
    @media (max-width: 30em) {
        font-size:calc(5rem + 8vw);

}
}
h2{
    font-family: 'Kaushan Script';
    font-size:${props => props.theme.fontlg};
    text-shadow: 2px 2px 2px ${props => props.theme.body} ;
    font-weight:300;
    color:azure;
   text-transform:capitalize;
   @media (max-width: 30em) {
    font-size:${props => props.theme.fontmd};
    margin-top:-1.5rem;
}
}
`
const container = {
    hidden:{
        opacity:0,
       
    },
    show:{
        opacity:1,
        transition:{
        delayChildren:2,
        staggerChildren:0.3,
    }
    },
}
const item = {
    hidden:{
        opacity:0,     
    },
    show:{
        opacity:1,
    },
}
const Text = styled(motion.span)`
font-size:${props => props.theme.fontxl};
color:${props => props.theme.text};
padding-bottom: 0.5rem;

`
const CoverVideo = () => {
  return (
    <VideoContainer>
    <DarkOverlay/>
    <Title variants={container}
           initial="hidden"
           animate="show">
        <div>
            <motion.h1 variants={item} data-scroll="0.19" data-scroll-speed="4">A</motion.h1>
            <motion.h1 variants={item} data-scroll="0.16" data-scroll-speed="4">j</motion.h1>
            <motion.h1 variants={item} data-scroll="0.13" data-scroll-speed="4">i</motion.h1>
            <motion.h1 variants={item} data-scroll="0.09" data-scroll-speed="4">k</motion.h1>
            <motion.h1 variants={item} data-scroll="0.06" data-scroll-speed="4">e</motion.h1>
        </div>
        <Text  variants={textVariant}
           initial="hidden"
           animate="visible">
             Academy
    </Text> 
    <br />
        <motion.h2 variants={item} data-scroll-delay="0.04" data-scroll="0.13" data-scroll-speed="4">A fashion school,bespoke tailoring,ready-to-wear, <br /> pattern drafting and sales of tailoring accessories</motion.h2>
    </Title>
        <img  src={mainImage2} alt=''  />
    </VideoContainer>
  )
}
export default CoverVideo
