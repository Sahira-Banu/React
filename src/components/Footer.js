import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
    <div className='Footer-Container'>
      <div className='Left'>
        <div className='Left-Upper'>
          
            <h2>Have something to talk about <br/>with our professionals ?</h2><br/>
            


  <input class="input" type="text" placeholder='Your email here'/>
  
  


           
        </div>
        
          <div className='Left-Lower'>
            <button>Whatsapp</button> 
            <button>Email</button>
            <button>Twitter</button>
            <button>Instagram</button>
          </div>

          

      </div>
      <div className='Right'>
        <div className='Card'>
             <Card title="Menu" sub1="About Us" sub2="Newsroom" sub3="Careers" sub4="Partnerships"/>
        </div>
        <div className='Card'>
             <Card title ="Get Help" sub1="Support Career" sub2="24h Service" sub3="Quick Chat"/>
        </div>
        <div className='Card'>
             <Card title="Support" sub1="FAQ" sub2="Policy" sub3="Business"/>
        </div>
      </div>
    </div>
  )
}

const Card =(props)=>{
  return(
    <div>
      <h3>{props.title}</h3>
      <br/>
      <h4>{props.sub1}</h4>
      <h4>{props.sub2}</h4>
      <h4>{props.sub3}</h4>
      <h4>{props.sub4}</h4>
    </div>
  )
}
export default Footer