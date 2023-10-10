import React from 'react'
import '../styles/Contact.css'
import { useState } from 'react';



function Contact() {
  const [firstName, setFirstName] =useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] =useState("")
  const [phoneNumber, setPhoneNumber] =useState("")
  const [country, setCountry] = useState("")
  const [gender, setGender] = useState("")
  const [message, setMessage] = useState("")
  

  const displaySubmit =(e)=>{
    e.preventDefault();
    console.log("First Name : ",firstName, "\nLast Name : ",lastName,"\nEmail : ",email,"\nPhone Number : ",phoneNumber,"\nCountry : ",country,"\nGender :",gender,"\nMessage :",message)
  }

  return (
    <div className='Con-Container'>
      <div className='Con-Head'>
       <center>
          <p>Contact us</p>
          <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h3>
        </center> 
      </div>
          <div className='Con-Seperator'>
               <div className='Con-Left'>
                

                <div className='box'>
                  <div className='icon'>
                  <i className="fa fa-phone"></i>  </div>
                    <div className='text'>
                    < Details heading="Phone number" detail="077 4588 754" />
                   
                  </div>
                </div>

                <div className='box'>
                  <div className='icon'>
                 < i className="fa fa-at"></i>  </div>
                    <div className='text'>
                    < Details heading="Email address" detail="contact@fashionista.com" />
                   
                  </div>
                </div>

                <div className='box'>
                  <div className='icon'>
                  <i className="fa fa-map-marker"></i>  </div>
                    <div className='text'>
                    < Details heading="Location" detail="London, United Kingdom" />
                   
                  </div>
                </div>
                
              
               
                </div>

            <div className='Con-Right'>
              
              <form onSubmit={displaySubmit} >
                  <div className='input-row'>
                    <div className='input-group'>
                       <input type="text" placeholder="Enter your name here" required onChange={e=>setFirstName(e.target.value)}/>
                    </div>
                      <div className='input-group'>
                         <input type="text" placeholder="Enter your name here" required onChange={e=>setLastName(e.target.value)}/>
                      </div>  
                       
                  </div>

                  <div className='input-row'>
                    <div className='input-group'>
                       <input type="email" placeholder="Enter your email here" required onChange={e=>setEmail(e.target.value)}/>
                    </div>
                    <div className='input-group'>
                      <input type="text" placeholder="Enter your phone number here" required maxLength="10" onChange={e=>setPhoneNumber(e.target.value)}/>
                    </div>
                        
                  </div>   

                   <div className='input-row'>
                     <div className='input-group'>
                       <input type="text" placeholder="Enter your country here" required onChange={e=>setCountry(e.target.value)}/>
                     </div>
                      <div className='input-row'>
                      <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value )} checked/> Male
                      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)}/> Female
                      </div>
                       
                   </div>   
                   
                  <textarea cols='100' rows='5' placeholder="Tell us about your special requirement" required onChange={e=>setMessage(e.target.value)}/>
                  <br/><br/>
                  
                  <button className='btnsubmit' onClick={()=>alert('Thank You '+ firstName + " " + lastName)}>First Name</button>
                </form>  
           
                
            </div>
          </div>
            
    </div>
  )
}

const Details = (props) =>{
    return(
        <div className='Con-prop'>
           <h5>{props.heading}</h5>
           <h3>{props.detail}</h3>
        </div>
    );
}

export default Contact