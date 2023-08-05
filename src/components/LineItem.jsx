
import { FaTrashAlt } from 'react-icons/fa'


const LineItem = ({item, handleClick, handleDelete}) => {
  return (
    <li key={item.id} className="item">
      <input 
        type="checkbox" 
        checked={item.isDone} 
        key={item.id} 
        onChange={()=>handleClick(item.id)}
      />
      <label style={{textDecoration: item.isDone ? "line-through" : "none"}}
      onClick={()=>handleClick(item.id)}>
        {item.title}
      </label>
      
      <FaTrashAlt
        onClick={()=>(handleDelete(item.id))}
        role="button"
        tabIndex="0"
        aria-label={`Delete ${item.title}`}
      />
    </li>
  )
}

export default LineItem