import React, { useState } from 'react'
import { question } from "./Api";
import "./Accordian.css";
import MyAccordian from "./Myaccordian";

const Accordian = () => {
    const [data, setData] = useState(question)
  return (
    <>
     <div className='accordian'>
     <h1>Accordian</h1>

 {
    data.map((curElem) => {
        const { id } = curElem;
        return(
            <MyAccordian key={ id} {...curElem}/>
        )
    })
 }

     </div>
    </>
   
  )
}

export default Accordian