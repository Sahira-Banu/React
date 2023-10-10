import React from 'react'
import '../styles/Home.css'
import Main from '../components/Main'
// import Slider from '../components/Slider'
import Caro from '../components/Caro'

import Top from '../components/Top'
import Collections from '../components/Collections'
import Shop from '../components/Shop'
import Contact from '../components/Contact'
import Join from '../components/Join'
import Explore from '../components/Explore'

const Home = () =>{
  return (
    <>
      <Main/>
      <Caro/>
      {/* <Slider/> */}
      <Top/>
      <Collections/>
      <Shop/>
      <Contact/>
      <Join/>
      <Explore/>
    </>
  )
}

export default Home