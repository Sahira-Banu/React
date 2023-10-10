import React from 'react'
import '../styles/Explore.css'

function Explore() {
  return (
    <div className='E-Container'>

<div class="blog-outer">
  <div class='E-Head'>
  <center><h1>Explore Our Blog</h1>
  <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci, commodi dolore ex, </h3></center></div>
  <div class="cards-container">
    <div class="left">
      <div class="row-one">
        <div class="card row-one-left">
          <p class="title">Clothing</p>
          <div class="explore-button">Explore</div>
        </div>
        <div class="card row-one-right">
          <p class="title">Fashion Designing</p>
              
          <div class="explore-button">Explore</div>
        </div>
      </div>
      <div class="row-two">
        <div class="card row-two-left">
          <p class="title">Fashion Accessories</p>
          <div class="explore-button">Explore</div>
        </div>
        <div class="card row-two-right">
          <p class="title">Cosmetics</p>
          <div class="explore-button">Explore</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="card full">
        <p class="title"> Modeling</p>
        <div class="explore-button">Explore</div>
        </div>
    </div>
  </div>
</div>


      {/* <div className='E-Head'>
       <center>
          <h1>Explore our Blog</h1> 
          <h4>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h4>
       </center> 
      </div> */}
       
       {/* <div className='Ex-Container'> */}
            {/* <div className='Ex-Content'>
               <div className='Sub-Ex'>
                      <div className='first'>
                          <img src='https://ventifashion.com/wp-content/uploads/2021/01/How-to-Style-a-Clothing-Rack-7.jpg' alt=''/>
                          <Blog title="Clothing"/>
                      </div>
                      <div className='second'>
                        <Blog title ="Fashion Designing"/>
                      </div>
               </div> */}
                {/* <div className='Sub-Ex2'>
                      <div className='third'>
                        <Blog title="Fashion Accessories"/>
                      </div>
                      <div className='fourth'>
                        <Blog title ="Cosmetics" />
                      </div>
                </div>  
                  
             </div>
             <div className='fifth'>
               <Blog title="Modeling"/>
            </div>
       </div>
       
        */}
    </div>
  )
}

// const Blog =(props)=>{
//     return(
//       <div className='prop'>
//        <h3>{props.title}</h3>
      
//         <button className='btnimg'>Explore</button>
//       </div>
//     )
// }

export default Explore