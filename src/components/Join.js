import React from 'react'
import '../styles/Join.css'

function Join() {
  return (
    <div className='J-Container'>
      <div className='J-Head'>
        <center><p>Join Us</p>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h3></center>
      </div>
        
      <div className='J-Sub-Container'> 
        <div className='J-Sub-Content'>
          <div className='img'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx1ie8w2qBneACKAaq8Av6x4ZD_UEptxANpslSK-6Gm50NYn47qF7f3qyqUlxrG5_UbWs&usqp=CAU' alt=""/>
          </div>
          <div className='J-Child-Container'>
                  <Info name="Sales Consultant" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
      </div>
        
        <div className='J-Sub-Content'>
            <div className='img'>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlojFdy-vbjeHZjxpMNFftWHv8BJUQ0QJQf4QTRZkRa3_Vsef1KdVCLpUPKrBzFYYvYQ&usqp=CAU' alt=""/>
            </div>
          <div className='J-Child-Container'>
                <Info name="Account Executive" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
        </div>
         
        <div className='J-Sub-Content'>
           <div className='img'>
           <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ88AE82aXP3sFcJ7xGNFOrazbKAj-2GpZL3A&usqp=CAU' alt=""/>
            </div>
          <div className='J-Child-Container'>
                <Info name="Sales Representatives" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."/>
            </div>
        </div>      
            
      </div>  
        
    </div>
  )
}

const Info =(props)=>{
    return(
        <div>
            <h2>{props.name}</h2>
            <h4>{props.info}</h4>
            <button className='btn'>Read more</button>
        </div>
    )
    
}
export default Join