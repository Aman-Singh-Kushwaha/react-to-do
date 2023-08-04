import AddItem from './AddItem';
import ItemList from './ItemList';

export default function({list, handleClick, handleDelete}){
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