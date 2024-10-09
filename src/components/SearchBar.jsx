import React from 'react'

const SearchBar = ({setSearchTerm}) => {
    
  return (
    <div>
        <form >
            <input type="text" className='bg-blue-200 border-none outline-none w-[400px] rounded-md px-2 py-2' 
            onChange={(e)=>{setSearchTerm(e.target.value)}

            } />
        </form>
    </div>
  )
}

export default SearchBar