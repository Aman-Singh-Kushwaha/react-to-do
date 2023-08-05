 import ItemList from './ItemList';

 const ToDoList= ({list, handleClick, handleDelete})=>{
  return( <> 
    {(list.length===0) ? (<p>No Task</p>) : (
        <ItemList
          list= {list}
          handleClick = {handleClick}
          handleDelete = {handleDelete}
        />
      )}
    </>
  );
}

export default ToDoList;