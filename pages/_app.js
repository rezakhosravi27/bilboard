import '../styles/globals.css'
import '../styles/components-style/Navbar.css' ;
import '../styles/fontIranBakh.css' ;
import '../styles/components-style/UnderHeader.css' ;
import '../styles/components-style/ContainerIcon.css'
import '../styles/components-style/Sidebar.css'
import '../styles/components-style/Slider.css'
import '../styles/components-style/Blog.css'
import '../styles/components-style/Footer.css' ;

// import Navbar from './components/Navbar';
// import Footer from './components/Footer' ;


function MyApp({ Component, pageProps }) {
  return(
    <>
    {/* <Navbar /> */}
    <header><link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/></header>
    <Component {...pageProps} />
    {/* <Footer /> */}
    </>
  )
}

export default MyApp
