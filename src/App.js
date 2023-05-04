
import images from "./silck/images";
import ImageSlider from "./silck/ImageSlider";
import Accordian from "./Newaccor/Accordian";
import Quotes from "./quotes/Quote";
import ShoppingList from "./shopping/Slist";
import SearchBar from "./Searchbar/Search";
  
const App = () => {
  return (
    <>
    <div className="App">
    <ImageSlider images={images}/>
  </div>
  <div className="container">
   < Accordian/>
   </div>
   <div className="container_1">
   < Quotes/>
   </div>
   <div className="container_2">
   < ShoppingList/>
   </div>
   <div className="container_3">
   < SearchBar/>
   </div>
  </>
  )
}
  
export default App;