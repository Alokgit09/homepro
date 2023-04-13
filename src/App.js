
import images from "./silck/images";
import ImageSlider from "./silck/ImageSlider";
import Accordian from "./Newaccor/Accordian";
  
const App = () => {
  return (
    <>
    <div className="App">
    <ImageSlider images={images}/>
  </div>
  <div className="container">
   < Accordian/>
   </div>
  </>
  )
}
  
export default App;