import React, { useState } from 'react'
import "./Slist.css";

const Slist = () => {
const [allItems, setallItems] = useState([]);
const [list, setList] = useState("");
const [toggleBtn, setToggleBtn] = useState(true);

const addList = (e) => {
    e.preventDefault();
  if(!list){

  }else{ 
    setallItems([...allItems, list]);
    setList('');
  }
}

const clreaList = () => {
   setallItems([]);
} 

const deleteList = (id) => {
  const UpdatedItem = allItems.filter((item, index) => {
    return index !== id;
  })
  setallItems(UpdatedItem);
}


const editList = (id) => {
  const EditsItem = allItems.find((item, index) => {
    return index === id;
  });
  // console.log(EditsItem);
  setToggleBtn(false);
 setallItems([
  ...allItems,
  EditsItem
 ]);
}



  return (
    <>
    <h2>Shopping list</h2>
    <input type="text" className='inputBox' value={list} onChange={(e) => setList(e.target.value)} />
    
    <span className='addlist_btn' onClick={addList}>{toggleBtn ? "➕" : "✍" }</span>
    <span className='addlist_btn' onClick={clreaList}>❌</span>


    <div className='listitem'>
    {
    
    allItems.map((item, index) => (
          <div className='listdata' key={index}><span className='index'>{index+1}</span>
          <span className='map_item'>{item}</span>
          <span className='delete'><span className='addlist_btn' onClick={() => deleteList(index)}>🧨</span></span>
          <span className='edit'><span className='edit_btn' onClick={() => editList(index)}>✍</span></span>
          </div>
         
        ))}
        </div>
    </>
  )
}

export default Slist