import React from 'react'
import '../styles/Shop.css'

function Shop() {
  return (
    <div className='S-Container'>
        <div className='S-Head'>
          <center><p>Shop Now</p> 
            <h3>There are various types of fashion shops that caters to different styles,budgets and target markets.</h3></center>
        </div>
       
       <div className='S-Box'>
              <div className='S-Content'>
                    <div className='S-img'>
                    <div class="image-card-wrapper">
                    <div class="image-card-shadow"></div>
                    <div class="image-card">
                    <img src="https://img.hoodline.com/uploads/story/image/741919/Houndstooth_Photo_1_Enhanced.jpg" alt=""/>
                    </div>
                    </div>
                    </div>
                      <div className='Sub-Container'>
                          <Appear topic="Department Store"/>
                      </div>
              </div>

                <div className='S-Content-2'>
                      <div className='S-img2'>
                      <div class="image-card-wrapper">
                    <div class="image-card-shadowfull"></div>
                    <div class="image-cardfull">
                      <img src='https://www.jacksonville.com/gcdn/presto/2023/02/06/NFTU/aba6f5b9-36b0-42f0-8a40-e277e7d88975-Unknown.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp' alt=''/>
                      </div>
                    </div>
                    </div>
                      <div className='Sub-Container2'>
                        <Appear topic="Boutique"/>
                      </div>
                </div>

                <div className='S-Content'>
                      <div className='S-img'>
                      <div class="image-card-wrapper">
                    <div class="image-card-shadow"></div>
                    <div class="image-card">
                      <img src='https://media.istockphoto.com/id/1210582844/photo/young-businessman-shopping.jpg?s=612x612&w=0&k=20&c=NQZBIW2ZKwU-G8GRMyvAWYRojI1hz9pUdQ_uVgc_cwA=' alt=""/>
                      </div>
                     
                    </div>
                    </div>
                      <div className='Sub-Container'> 
                        <Appear topic="Luxury Fashion Store"/>
                      </div>
                </div>
       </div>
      
        
    </div>
  )
}

const Appear =(props) =>{
    return(
      <div>
        <center><h3>{props.topic}</h3></center>
        <center><button className='btnshop'>Shop now</button></center>
      </div>
    ) 
}
export default Shop