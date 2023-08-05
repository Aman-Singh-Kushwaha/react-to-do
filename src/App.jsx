import { useState, useEffect } from 'react'
import './App.css'

import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
// import Navbar from './components/Navbar.jsx'

function App() {
  const [list, setList]=useState(JSON.parse(localStorage.getItem('ToDoList')) || []);

  const [newItem, setNewItem] = useState('');

  const [searchItem, setSearchItem] = useState('');
  
  useEffect(()=>{
    console.log("localStorage updated")
    localStorage.setItem('ToDoList',JSON.stringify(list))
  },[list])

  const addItem = (newItem)=>{
    const ID = list.length ? list[list.length -1].id + 1 : 1 ;
    const newItemObject = {id:ID, title: newItem, isDone: false};
    const newList = [...list, newItemObject]
    setList(newList); //appending new object with previous list
    setNewItem('')
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    if(!newItem) return; // Doesn't Add Empty Task
    addItem(newItem);
  }  

  const handleClick=(id)=>{
    const newList=list.map((item)=> item.id===id ? {...item,isDone: !item.isDone} : item);
    setList(newList);
  }
  
  const handleDelete=(id)=>{
    const reducedList= list.filter((item) => item.id !==id);
    setList(reducedList);
  }

  return (
    <>
      {/* <Navbar title='ToDoList' /> */}
      <div className='card'>
        <Header title="To-Do's"/>
        <AddItem
          newItem={newItem} 
          setNewItem={setNewItem}
          handleAdd={handleAdd}
        />
        <SearchItem 
          searchItem={searchItem}
          setSearchItem = {setSearchItem}
        />
        <ToDoList
          list={list.filter(list=>((list.title).toLowerCase()).includes(searchItem.toLowerCase()))}
          handleClick ={handleClick}
          handleDelete= {handleDelete}
        />
        <Footer length={list.length}/>
      </div>
    </>
  )
}

export default App
