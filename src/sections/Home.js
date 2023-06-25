 import React from 'react'
 import styled from 'styled-components'
import CoverVideo from '../components/CoverVideo'
import Logo from '../components/Logo'
import NavBar from '../components/NavBar'
 const Section = styled.section`
    position:relative;
    overflow:hidden;
    min-height:100vh;
 `
 const Home = () => {
    return (
        <Section data-scroll-section id='home'>
          <CoverVideo/>
           <Logo/>
           <NavBar/>
          
        </Section>
    )
 }
 
 export default Home
 