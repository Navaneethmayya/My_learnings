import React, { useState } from 'react'
import ducati from "../images/ducati_bike.avif";
import ferrari from "../images/ferrari_car.jpg";
import truck from "../images/truck.jpg";
import "./Corousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
const Corousel = () => {

    const [index,setIndex] = useState(0);
    
    const data=[
        {
            name:"ducati-bike",
            img:ducati,
        },
        {
            name:"ferrari-car",
            img:ferrari,
        },
        {
            name:"truck",
            img:truck,

        },
        
    ]
    const prevslide=()=>{
       setIndex(curr=> curr === 0?data.length-1:curr-1)
    }
    const nextslide=()=>{
        setIndex(curr=> curr === data.length-1?0:curr+1)
    }
  return (
    <div className='carousel'>
        
        <BsArrowLeftCircleFill className='prevbtn' onClick={prevslide}/>
      {
        
        // data.map((p)=>(
        //     <img src={p.img} className='images' alt="images"/>
        // ))
        <img src={data[index].img} className='images' alt="images"/>
      }
      
      <BsArrowRightCircleFill className='nextbtn' onClick={nextslide}/>

      
      <div className='indicators'>
      {
        data.map((_,idx)=>(
            // {
            //     index==idx &&
            //     <button key={idx} className='slide'></button>
            // }
            // <button key={idx} className='slide'></button>
            <div>{(index===idx)?<button key={idx} className='slide'></button>:<button key={idx} className='slide_dark'></button>}</div>
            
        ))
      }
      </div>
      </div>

  
  )
}

export default Corousel
