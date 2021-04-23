import React from 'react'

const SearchBar = ({ handleChange }) => {
   
// console.log(handleChange)
    return (
        <form>
            <input className='form-control' placeholder="Last name" onChange={handleChange}/> 
        </form>
    )
}

export default SearchBar
