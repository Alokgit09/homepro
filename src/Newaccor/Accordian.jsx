import React, { useState } from 'react'
import { question } from "./Api";
import "./Accordian.css";

const Accordian = () => {
    const [data, setData] = useState(question)
    const [show, setShow] = useState(null)


    const toggle = (id) => {
      if (show === id){
            return setShow(null)
      }
      setShow(id)
  }
  
            

  return (
    <>
     <div className='accordian'>
     <h1>Accordian</h1>

 {
    data.map((curElem) => {
        const { id, title, completed } = curElem;
        return(
          <div className="content">
          <div className="main_haeding" onClick={() => toggle(id)}>
              <p>{show === id ? "–" : "+" }</p>
              <h3>{title}</h3>
          </div>
          { show === id &&  <p className="answers">{completed}</p>  }
          </div>
        )
    })
 }

    
     </div>
    </>
   
  )
}

export default Accordian