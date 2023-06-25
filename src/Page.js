import './App.css';
import GlobalStyles from './styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { dark } from './styles/Themes';
import  'locomotive-scroll/dist/locomotive-scroll.css';
import Home from './sections/Home';
import About from './sections/About';
import NewsLetter from './sections/NewsLetter';
import Footer from './sections/Footer';
import Service from './sections/Service';
import Book from './sections/Book';
import Gallery from './sections/Gallery';
function Page() {
  return (
    <>
     <GlobalStyles/>
     <ThemeProvider theme={dark}>
     

      

{/* <ScrollTriggerProxy/> */}
 
  <main className='App' >
   <Home/>
   <Book/>
   <About/>
   <Service/>
   <Gallery/>
   <NewsLetter/>
   <Footer/>
  </main>
  
       
     </ThemeProvider>
    </>
  );
}

export default Page;
