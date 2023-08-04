import React,{useRef} from 'react'
import {FaPlus} from 'react-icons/fa';

const AddItem = ({newItem, setNewItem, handleAdd}) => {
const inputRef= useRef();

  return (
    <form className='addForm' onSubmit={(e)=>handleAdd(e)}>
      <label htmlFor='addItem'> Add Item</label>
      <input 
        autoFocus
        ref={inputRef}
        id='addItem' 
        type='text' 
        placeholder='Add Item' 
        value={newItem} 
        required
        onChange={(e)=>{setNewItem(e.target.value)}}
      />
      <button type='submit' onClick={()=>inputRef.current.focus()}>
        <FaPlus/>
      </button>
    </form>
  )
}

export default AddItem