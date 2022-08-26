import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css' ;
import Navbar from './components/Navbar' ;
import UnderHeader from './components/UnderHeader' ;
import ContainerIcon from './components/ContainerIcon' ;
import Sidebar from './components/Sidebar' ;
import Slider from './components/Slider' ;
import Blog from './components/Blog' ;
import Footer from './components/Footer' ;
import Carousel from './components/Carousel'

export default function Home() {
  return (
    <>
    
      <Head>
        <title>bilboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta charset="UTF-8"></meta>
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
      </Head>

      <main>
        <Navbar />
        <UnderHeader />
        <ContainerIcon />
        <Sidebar />
        <Carousel />
        <Blog />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  )
}
