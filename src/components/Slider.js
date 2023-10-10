import React from 'react'
import HeroSlider, {Slide} from 'hero-slider'
import '../styles/Slider.css'


const slide1 ='https://media.istockphoto.com/id/1257563298/photo/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.jpg?s=170667a&w=0&k=20&c=noFFaO69jpEfc08V7Y0Th9Y10yQHzTYFNzkwo1esY9U=';

const slidet="Hello";

function Slider() {
  return (
       <div className='Hero'> 
          <HeroSlider
             slidingAnimation ="left_to_right"
             orientation="horizontal"
             initialSlide={1}
             onBeforeChange={(previousSlide, nextSlide)=>console.log("onBeforeChange", previousSlide, nextSlide)}
             onChange={nextSlide=>console.log("onChange",nextSlide)}
             onAfterChange={nextSlide => console.log("onAfterChange", nextSlide)}
             style={{
              backgroundColor: "rgba(0, 0, 0, 0.33)"
             }}
             settings ={{
              slidingDuration:250,
              slidingDelay :100,
              shouldAutoplay :true,
              shouldDisplayButton:true,
              autoplayDuration: 5000,
              height:"100vh"
             }}
        >
          <Slide 
          background={{
            backgroundImage : slide1,
            // backgroundAttachment: "fixed"
            title:slidet
          }}   
          />
          <Slide 
          background={{
            backgroundImage : slide1,
            // backgroundAttachment: "fixed"
          }}   
          />
          <Slide 
          background={{
            backgroundImage : slide1,
            // backgroundAttachment: "fixed"
          }}   
          />
        </HeroSlider>

       </div> 
        
    
  )
}

export default Slider



// const Slider = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };

//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//         <img src='https://media.istockphoto.com/id/1257563298/photo/fashion-clothes-on-a-rack-in-a-light-background-indoors-place-for-text.jpg?s=170667a&w=0&k=20&c=noFFaO69jpEfc08V7Y0Th9Y10yQHzTYFNzkwo1esY9U=' alt=""/>
//         </div>
//         <div>
//           <img src="image2.jpg" alt="Image 2" />
//         </div>
        
//         {/* Add more image slides as needed */}
//         </Slider>
//     </div>
//   );
// };

// export default Slider;