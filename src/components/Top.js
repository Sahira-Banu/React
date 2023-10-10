import React from 'react'
import '../styles/Top.css'
import { Link } from 'react-router-dom'
// import logo from '../assets/top-event.png'

function Top() {
  return (
    <div className='T-Container'>
      <div className='T-Head'>
       <center> <p>Top Values For You</p> 
        <h3>The fashion service offers innovative and unique styles that go beyond conventional fashion trends.</h3>
        </center>
      </div>
       
      <div className='T-Content'>
         <div className='T-Sub-Container'>
         <div className='T-img1'>

         </div>
          <div className='T-Text'>
            <More head="Fashion Event Management" para="Fashion event management services specialize in organizing fashion shows, product launches, and other f..."/>
          </div>
          
        </div>
        <div className='T-Sub-Container'>
          <div className='T-img2'>
            
          </div>
          <div className='T-Text'>
           <More head="personal styling" para="These services provide personalized fashion advice and styling guidance based on your preferences, body typ..."/>
           </div>
        </div>
        <div className='T-Sub-Container'>
        <div className='T-img3'>
             
        </div>
        <div className='T-Text'>
          <More head="Fashion Subscription Boxes" para="Subscription boxes like FabFitFun and Birchbox offer curated selections of fashion and beauty products deliv..."/>
          </div>
        </div>
      </div>
        
    </div>

    
  )
}
    
const More =(props) =>{
      return(
        <div><center>
           <h2>{props.head}</h2>
           <h4>{props.para}</h4>
           <Link className='link'>Learn More</Link></center>
        </div>
      )
}

export default Top