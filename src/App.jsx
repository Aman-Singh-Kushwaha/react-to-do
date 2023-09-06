import { useState, useEffect } from 'react'
import './App.css'

import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Footer from './components/Footer';
import AddItem from './components/AddItem';
import SearchItem from './components/SearchItem';
import apiRequest from './components/apiRequest';
// import Navbar from './components/Navbar.jsx'

function App() {
  const API_URL='http://localhost:3500/lists'

  const [list, setList]=useState([]);
  const [newItem, setNewItem] = useState('');
  const [searchItem, setSearchItem] = useState('');
  const [fetchError, setFetchError] = useState(null);
  
  useEffect(()=>{
    const fetchList = async()=>{
      try {
        const res =await fetch(API_URL);
        if(!res.ok) throw new Error("Didn't expected data from server")

        const listItem = await(res.json());
        console.log(listItem);
        setList(listItem);
        setFetchError(null);
      } catch (error) {
        console.log(error.message);
        setFetchError(error.message);
      }
    }
    fetchList();
      
  },[])

  const addItem = async (newItem)=>{
    const ID = list.length ? list[list.length -1].id + 1 : 1 ;
    const newItemObject = {id:ID, title: newItem, isDone: false};
    const newList = [...list, newItemObject]
    setList(newList); //appending new object with previous list
    setNewItem('')
    
    //  ************  POST Operation   ***********
    const postOptions = {
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
      },
      body:JSON.stringify(newItemObject)
    }

    const result = await apiRequest(API_URL, postOptions);
    
    if(result) setFetchError(result);
  }

  const handleAdd=(e)=>{
    e.preventDefault();
    if(!newItem) return; // Doesn't Add Empty Task
    addItem(newItem);
  }  

  const handleClick= async (id)=>{
    const newList=list.map((item)=> item.id===id ? {...item,isDone: !item.isDone} : item);
    setList(newList);

    console.log(newList);
    const myItem = newList.filter((item)=> item.id === id);  // newList.find(item=>item.id===id)
    console.log(myItem[0])
    const updateOptions ={
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({isDone: myItem[0].isDone})
    }
    const reqURL = `${API_URL}/${id}`

    const result = await apiRequest(reqURL, updateOptions);
    if(result) setFetchError(result);
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
        {(fetchError) ? 
          (<p style={{color:'red'}}>
            Error: {fetchError}
          </p>) :
          <ToDoList
          list={list.filter(list=>((list.title).toLowerCase()).includes(searchItem.toLowerCase()))}
          handleClick ={handleClick}
          handleDelete= {handleDelete}
          />
        }
        <Footer length={list.length}/>
      </div>
    </>
  )
}

export default App
