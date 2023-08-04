import React from 'react'

const SearchItem = ({searchItem, setSearchItem}) => {
  return (
    <form className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="searchForm">Search</label>
      <input 
        id="searchForm" 
        type="text"
        placeholder='Search Item'
        value={searchItem}
        onChange={(e)=>{setSearchItem(e.target.value)}} 
      />
    </form>
  )
}

export default SearchItem