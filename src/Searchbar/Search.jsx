import React, { useState, useEffect } from 'react'
import axios from "axios";
import "./search.css";


const baseURL = "https://jsonplaceholder.typicode.com/posts";

const Search = () => {
     
    const [searchQuery, setSearchQuery] = useState("");
    const [searchData, setSearchData] = useState([]);

useEffect(() => {
    axios.get(baseURL).then((response) => {
        setSearchData(response.data);
        console.log(response.data);
    });
    
},[]);


const handleChange = (e) => {
    e.preventDefault()
    setSearchQuery(e.target.value);
}
const handleSubmit = (e) => {
 e.preventDefault()
 if (searchQuery) {
    const searchedData = searchData.filter(item => item.title.match(searchQuery))
    setSearchData(searchedData)
 }
 
}


  return (
    <>
    <h2>Search Bar</h2>
    <div className="search_content">

        {/* <form action="" onSubmit={handleSubmit}> */}
        <input type="search" className='search_bar' value={searchQuery} onChange={handleChange}/>
        <button type='button' onClick={handleSubmit} className='search_btn'>Search</button>
        {/* </form> */}
     </div>

{
   searchData.map((curElem) => {
  
    return(
   
        <div className="content">
        <div className="title1">
            <div className="indexnum">{curElem.id}</div>
             <div className="first_text">Title: {curElem.title}</div>
             <div className="body_text">Content: {curElem.body}</div>
        </div>

        </div>
     
    );

   })
}

    </>
  )
}

export default Search