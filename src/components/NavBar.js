import React, { useState } from 'react'
import logo from '../assets/Images/AJIKELOGO-removebg-preview.png'
import styled from 'styled-components'
import { motion } from 'framer-motion'
// import { useLocomotiveScroll } from 'react-locomotive-scroll'
import { Link } from 'react-router-dom'


const NavContainer = styled(motion.div)`
    width:100vw;
    z-index:6;
    position: absolute;
    top: ${props => props.click ? '0' : `-${props.theme.navHeight}`};
    display:flex;
    justify-content:center;
    align-items: center;
   transition: all 0.3s ease;

   
   @media (max-width: 40em) {
    top: ${props => props.click ? '0' : `calc(-43vh - 4rem)`};
   }
   
`
const MenuItems = styled(motion.ul)`
    position: relative;
    height:${props => props.theme.navHeight};
    background-color:${props => props.theme.body};
    color:${props => props.theme.text};
   list-style: none;
   display:flex;
   justify-content:space-around;
    align-items: center;
    width:100%;
    padding: 0 10rem;

 @media (max-width: 40em) {
    flex-direction:column;
    padding:2rem 0;
    height:50vh;
   } 
   
`
const MenuBtn = styled.li`
    background-color:${props => `rgba(${props.theme.textRgba},0.7)`};
    list-style-type: style none;
    color:${props => props.theme.body};
    width: 15rem;
    height:2.5rem;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 20% 100%);
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    font-size:${props => props.theme.fontmd};
   font-weight: 600;
   text-transform: uppercase;
    display:flex;
    justify-content:center;
    align-items: center;
   cursor: pointer;

 @media (max-width: 40em) {
    width: 10rem;
    height:2rem;
    ${'' /* top: 114%; */}
   }
  
`
const MenuItem = styled(motion.li)`
   text-transform: uppercase;
   color:${props => props.theme.text};
    cursor:pointer;
    button{
        background-color: white;
        color:black;
        border-radius:20px;
        padding:12px;
        border:none;
    }
    @media (max-width: 40em) {
    flex-direction:column;
    padding:0.5rem 0;
   
   }
`

// const itemVariant = {
//     hidden:{
//         opacity:0,
//         x:-50,
//         pathLength:0
//     },
    
   

// }
const NavBar = () => {
    const [click, setClick] = useState(false);
    const closeMenu = () => setClick(false)
    
    

  return ( 
    <NavContainer
     click={click}
    initial={{
        y:'-100%'
    }}
    animate={{
        y:0
    }}
    transition={{
       duration:2, delay:5,
    }}
    >
    <MenuItems
    drag="y"
    dragConstraints={{
        top:0,
        bottom:70,
    }}
    dragElastic={0.05}
    dragSnapToOrigin
    >
    <MenuBtn onClick={() => setClick(!click)}>Menu</MenuBtn>
        <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}}
        ><img style={{width:'120px'}} src={logo} alt="" /></MenuItem>
        <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}}
        >
        <a href="#home" onClick={closeMenu}>Home</a>
        </MenuItem>
        <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}}
        >
            <a href="#abouts" onClick={closeMenu}>About Us</a>
        </MenuItem>
        <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}}>
            <a href="#services" onClick={closeMenu}>Services</a>
        </MenuItem>
        <MenuItem
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}} >
            <a href="#gallery" onClick={closeMenu}>Gallery</a>
        </MenuItem>
        <MenuItem
        
        whileHover={{scale:1.1, y:-5}}
        whileTap={{scale:0.9, y:0}}><button><Link to={'/register'}>Enroll Now</Link></button></MenuItem>
    </MenuItems>
        
    </NavContainer>
  )
}

export default NavBar