import React from 'react'
import LineItem from './LineItem'

const ItemList = ({list, handleClick, handleDelete}) => {
  return (
    <main>
      <ul>
        {list.map((item)=>(
          <LineItem
            key={item.id}
            item={item}
            handleClick={handleClick}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
    </main>
  )
}

export default ItemList