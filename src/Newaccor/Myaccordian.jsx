import React, { useState } from "react";

const Myaccordian = ({title, completed}) => {
    const [show, setShow] = useState(false)
return(
    <>
    <div className="content">
    <div className="main_haeding">
        <p onClick={() => setShow(!show)}>{show? "–" : "+" }</p>
        <h3>{title}</h3>
    </div>
    { show &&  <p className="answers">{ completed}</p>  }
    </div>
    </>
)
}
export default Myaccordian