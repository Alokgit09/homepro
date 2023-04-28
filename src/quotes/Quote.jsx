import React from 'react';
import { useState } from 'react';
import Data from "./Data";
import "./Style.css";

const Quote = () => {
    const [mydata, setMyData] = useState(Data[0]);

const handleChange = () => {
  let randomNum = Math.floor(Math.random() * Data.length);
  setMyData(Data[randomNum])
}
  
     
  return (
    <>
    <div className="quotediv">
      <div className="content">
        <div className="quotes">
        <h3>{mydata.id}</h3>
        <p>{mydata.quote}</p>
        <h4>{mydata.author}</h4>
        </div>
        <div className="next">
        <button onClick={handleChange}>Next Quote</button>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Quote;